import React from "react";
import Modal from "components/Modal";

class QueueUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      phoneNumber: null,
      seats: 2
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSeatsChange = this.handleSeatsChange.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handlePhoneNumber(e) {
    this.setState({ phoneNumber: e.target.value });
  }

  handleSeatsChange(e) {
    this.setState({ seats: e.target.value });
  }

  async handleSubmit() {
    const { name, phoneNumber, seats } = this.state;
    let canSubmit = name && phoneNumber && seats;

    if (canSubmit) {
      this.props.onSubmit({ name, phoneNumber, seats });
      this.handleClose();
    }
  }

  handleClose() {
    this.setState({
      name: null,
      phoneNumber: null,
      seats: null
    });
    this.props.onClose();
  }

  render() {
    const { name, phoneNumber, seats } = this.state;

    let canSubmit = name && phoneNumber && seats;

    let closeButton = {
      text: 'CLOSE',
      style: 'outline-secondary',
      onclick: this.handleClose
    };
  
    let addButton = {
      text: 'DONE',
      style: 'theme',
      onclick: this.handleSubmit,
      disabled: !canSubmit
    };

    return (
      <Modal
        title="Queue Up!"
        buttons={[closeButton, addButton]}
        onClose={this.handleClose}
        show={this.props.show}
        maxWidth="700px"
      >
        <div className="mb-5 text-right">
          <form>
            <div className="form-group row">
              <label for="project-name" className="col-sm-3 col-form-label">
                Full Name
              </label>
              <div className="col-sm-8">
                <input 
                  type="text" 
                  value={name || ''} 
                  className="form-control" 
                  id="project-name" 
                  onChange={this.handleNameChange} 
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="form-group row">
              <label for="contact-info" className="col-sm-3 col-form-label">
                Phone Number
              </label>
              <div className="col-sm-8">
                <input 
                  type="text" 
                  value={phoneNumber || ''} 
                  className="form-control" 
                  id="contact-info" 
                  onChange={this.handlePhoneNumber} 
                  placeholder="1 888 888 8888"
                />
              </div>
            </div>

            <div className="form-group row">
              <label for="project-folder" className="col-sm-3 col-form-label">
                Seats
              </label>
              <div className="col-sm-8 text-left">
                <input 
                  type="number" 
                  value={seats || ''} 
                  className="form-control" 
                  id="project-name" 
                  onChange={this.handleSeatsChange} 
                  placeholder=""
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}

export default QueueUpModal;
