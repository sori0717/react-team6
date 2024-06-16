import React, { useState } from 'react';
import ProblemHeader from '../component/ProblemHeader';
import problemList from '../component/problemList'; 
import Pagination  from  '../../../component/Pagination';
import style from '../../../component/Component.css';

function FindConsonant2() {
    const [currentPage, setCurrentPage] = useState(1);
    const problemsPerPage = 1;

    const indexOfLastProblem = currentPage * problemsPerPage;
    const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
    const currentProblem = problemList[indexOfFirstProblem]; 

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={style.wrapper}>
            <div className='container' style={style.container}>
                {currentProblem && (
                    <ProblemHeader number={currentProblem.number} description={currentProblem.question} />
                )}
            </div>
            <div className='pagination' style={style.Pagination}>
                <Pagination
                    totalProblems={problemList.length}
                    problemsPerPage={problemsPerPage}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default FindConsonant2;
