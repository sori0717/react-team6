import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ problemsPerPage, totalProblems, currentPage, paginate }) => {
    const totalPages = Math.ceil(totalProblems / problemsPerPage);
    const items = [];

    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => paginate(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    return(
        <div>
        <Pagination>{items}</Pagination>
        </div>
    )
};

export default PaginationComponent;
