import React from 'react';
import Select from 'react-select';
import {Formik, Form, Field, ErrorMessage} from 'formik';



const options = [
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'fruits', label: 'Fruits' },
    { value: 'snacks', label: 'Snacks' },
    { value: 'readyToEat', label: 'Ready To Eat' }
]



class AddProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description : '',
            name: '',
            picture: '',
            price:'',
            catagory:''
        }
        this.onSave= this.onSave.bind(this);
    this.validate = this.validate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }


    onSave(values) {

        let item = {
            id: this.state.id,
            description: values.description,
            price : values.price,
            catagory: values.catagory,
            name: values.name
        };

        console.log(item);
    }

    handleChange(e){
        this.setState({catagory:e.label})
    }

    validate(values){
        let errors = {}
        if(!values.catagory){
            errors.description = 'Please enter a valid catagory'
        }
        else if(!values.name && values.name.length<2){
            errors.description = 'Please enter a valid name'
        }
        else if(values.description < 4){
            errors.description = 'Please enter a valid description'
        }
        else if(!values.price){
            errors.description = 'Please enter a valid price'
        }

        return errors;

    }

    render(){
        let { id, description,name,picture,price,catagory }  = this.state;

        return(
            <div className='container'>
                <h1>Add an Item</h1>
                <Formik initialValues={{id,description,name,picture,price, catagory}} onSubmit={this.onSave} validateOnChange={false}
                        validateOnBlur={false} enableReinitialize={true} validate={this.validate}>
                    {() => (
                        <Form>
                            <ErrorMessage name="description" component="div"
                                          className="alert alert-warning" />

                            <fieldset className='form-group'>
                                <label className='form-label'><b>Select a Catagory to add: </b></label>
                                <Select className = 'form-control'  name='catagory' options={options} onChange={this.handleChange.bind(this)}/>

                            </fieldset>

                            <fieldset className='form-group'>
                                <label className='form-label'><b>Id: </b></label>
                                <Field type = 'text' className = 'form-control'  name='id' disabled />
                            </fieldset>


                            <fieldset className='form-group'>
                                <label className='form-label'><b>Item Name:</b></label>
                                <Field type = 'text' name='name' />
                            </fieldset>
                            <fieldset className='form-group'>
                                <label className='form-label'><b>Item Description:</b></label>
                                <Field className = 'form-control' type = 'text' name='description' />
                            </fieldset>
                            <fieldset className='form-group'>
                                <label className='form-label'><b>Item Price(per Kg or per piece value):</b></label>
                                <Field className = 'form-control' type = 'text' name='price' />
                            </fieldset>

                            <button className='add' type ='submit' >Add Item</button>
                            <button className='remove' type ='submit' >Remove Item</button>
                        </Form>
                    )
                }
                </Formik>

            </div>
        )
    }
}

export default AddProducts;