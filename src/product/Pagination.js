import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate,activeli}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav>
    <div className="container">
      <ul className='pagination'>
        {pageNumbers.map((number,index) => (
          <li key={index} onClick={() => paginate(number)}  className={`page-item ${ index+1===activeli ?'active-number':null}`}>
            <a  className="page-link"  >
              {number}
            </a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Pagination;