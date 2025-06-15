import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';

const CategoryForm = ({category, onSave, onChange, loading, errors}) => {
    return (
        <Form horizontal>
            <FormGroup controlId="formHorizontalName">
                <Col componentClass={ControlLabel} sm={2}>
                    Category Name
                </Col>
                <Col sm={10}>
                    <FormControl type="text" value={category.CategoryName}
                                 onChange={onChange}
                                 errors={errors.CategoryName} placeholder="Category Name"/>
                </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalDescription">
                <Col componentClass={ControlLabel} sm={2}>
                    Description
                </Col>
                <Col sm={10}>
                    <FormControl componentClass="textarea" placeholder="Category Description" />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col smOffset={2} sm={10}>
                    <Button type="submit" disable={loading} onClick={onSave}>
                        {loading ? 'Saving...' : 'Save'}
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    );
};

CategoryForm.propTypes = {
    category: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CategoryForm;