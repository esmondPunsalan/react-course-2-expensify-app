import React from "react";
import Modal from "react-modal";

export default class RemoveModal extends React.Component {

    componentWillMount() {
        Modal.setAppElement('body');
    }

    render () {
        return (
            <Modal
                isOpen={!!this.props.removeRequest}
                onRequestClose={this.props.closeRemoveModal}
                className="modal"
            >
                <div>Are you sure you want to remove this expense?</div>
                <div>
                    <button className="button modal__button" onClick={this.props.closeRemoveModal} value="1">Yes</button>
                    <button className="button modal__button" onClick={this.props.closeRemoveModal} value="0">No</button>
                </div>
            </Modal>
        )
    }
}