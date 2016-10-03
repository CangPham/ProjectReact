import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CategoryListRow = ({category}) => {
    return (
        <tr className="gradeA odd" role="row">
            <td className="sorting_1"><Link to={'/category' + category.id}>{category.title}</Link></td>
            <td>{category.category}</td>
            <td>{category.authorId}</td>
            <td className="center">{category.length}</td>
            <td className="center">A</td>
        </tr>
    );
};

CategoryListRow.propTypes = {
    category: PropTypes.object.isRequired
};

export default CategoryListRow;