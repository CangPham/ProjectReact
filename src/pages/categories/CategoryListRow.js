import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CategoryListRow = ({category}) => {
    return (
        <tr className="gradeA odd" role="row">
            <td className="sorting_1"><Link to={'/category' + category.CategoryId}>{category.CategoryName}</Link></td>
            <td>{category.CategoryDescription}</td>
        </tr>
    );
};

CategoryListRow.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryListRow;