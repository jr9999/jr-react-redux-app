import React, {PropTypes} from 'react';
import TextInput from '../../components/common/TextInput';
import CheckBox from '../../components/common/CheckBox';

class NewOrderForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <TextInput
            name="name"
            label="name"
            value=""
            onChange={this.props.onChange}/>

          <TextInput
            name="price"
            label="Price"
            value=""
            onChange={this.props.onChange}/>

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
  );
  }
}

export default NewOrderForm;
