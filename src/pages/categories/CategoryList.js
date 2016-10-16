import  React, {PropTypes} from 'react';
import CategoryListRow from './CategoryListRow';

const CategoryList = ({categories}) => {
    return (
        <table
            className="table table-striped table-bordered table-hover dataTable no-footer"
            id="dataTables-example" role="grid"
            aria-describedby="dataTables-example_info">
            <thead>
            <tr role="row">
                <th className="sorting_asc" tabIndex="0"
                    aria-controls="dataTables-example" rowSpan="1" colSpan="1"
                    aria-label="Rendering engine: activate to sort column descending"
                    aria-sort="ascending" style={ {width: 265} }>Category Name
                </th>
                <th className="sorting" tabIndex="0"
                    aria-controls="dataTables-example" rowSpan="1" colSpan="1"
                    aria-label="Browser: activate to sort column ascending"
                    style={ {width: 321} }>Description
                </th>
            </tr>
            </thead>
            <tbody>
                {categories.map(category =>
                    <CategoryListRow category={category} key={category.CategoryId}/>
                )}
            </tbody>
        </table>
    );
};

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired
};

export  default CategoryList;