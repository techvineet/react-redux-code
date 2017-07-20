import React, { Component } from "react";
import defaultAvatar from '../../../assets/dummy_avatar.png';

const validate = values => {
  const errors = {};

  if(!values.name) {
    errors.name = "Required";
  }

  return errors;
};


class ProfileImage extends Component {
  constructor(props){
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({imagePreviewUrl: null});
    this.props.onSubmit(this.state.file);
  }

  render() {
    let $imagePreview = null;

    if (this.state.imagePreviewUrl) {
      $imagePreview = (<img src={this.state.imagePreviewUrl} />);
    }
    else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    if(this.props.loading) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div>
          <img src={this.props.avatarUrl || defaultAvatar} title="Avatar" />
          <form className="uploader" encType="multipart/form-data" >
            <input ref="profilePic" type="file" name="profilePic" className="upload-file" onChange={(e) => this.handleImageChange(e)}/>

            <div className="imgPreview">
              {$imagePreview}
            </div>
            <input type="button" value="Upload" onClick={(e) => this.handleSubmit(e)} disabled={this.props.inProcess}/>
          </form>
        </div>
      );
    }
  }
}

export default ProfileImage;
