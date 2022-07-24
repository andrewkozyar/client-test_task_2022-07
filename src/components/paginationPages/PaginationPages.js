import React, { useContext, useEffect } from 'react'
import { getPageButtons } from '../../utils/utils';
import './PaginationPages.scss'
import leftPassiveArrowIcon from '../../static/leftPassiveArrowIcon.svg'
import leftActiveArrowIcon from '../../static/leftActiveArrowIcon.svg'
import rightPassiveArrowIcon from '../../static/rightPassiveArrowIcon.svg'
import rightActiveArrowIcon from '../../static/rightActiveArrowIcon.svg'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const PaginationPages = observer(() => {
  const { transactionStore } = useContext(Context);

  const pages = transactionStore.transactionPagesCount;
  const currentPage = transactionStore.currentPage;

  const [pageNumbers, setPageNumbers] = React.useState(getPageButtons(pages, currentPage))
  
  useEffect(() => {
    setPageNumbers(getPageButtons(pages, currentPage))
  }, [transactionStore.transactionPagesCount])

  const changePage = (newCurrentPage) => {
    setPageNumbers(getPageButtons(pages, newCurrentPage))
  }

  return (
    <div className='paginationPagesBody'>
      <div className='paginationPagesContent'>
        <button 
          className='arrowBtn' 
          onClick={() => {
            changePage(currentPage > 1 ? currentPage - 1 : currentPage)
            transactionStore.setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
          }}
        >
          {
            currentPage === 1 ?
            <img src={leftPassiveArrowIcon} alt="leftPassiveArrowIcon" />  :
            <img src={leftActiveArrowIcon} alt="leftActiveArrowIcon" />  
          }
        </button>

        {
          pageNumbers.map(pageNumber => {
            return (
              <div
                key={pageNumber}
              >
                {pageNumber === 'secondDots' ? (<div>...</div>) : null}

                {pageNumber !== 'secondDots' && pageNumber !== 'firstDots' ? (
                  <button 
                    className={currentPage === pageNumber ? 'pageBtn currentPageBtn' : 'pageBtn'}
                    onClick={() => {
                      changePage(pageNumber)
                      transactionStore.setCurrentPage(pageNumber)
                    }}
                  >
                    <div>{pageNumber}</div>
                  </button> 
                ) : null}

                {pageNumber === 'firstDots' ? (<div>...</div>) : null}
              </div>
            )
          })
        }
        <button 
          className='arrowBtn' 
          onClick={() => {
            changePage(currentPage < pages ? currentPage + 1 : currentPage)
            transactionStore.setCurrentPage(currentPage < pages ? currentPage + 1 : currentPage)
          }}
        >
          {
            currentPage === pages ?
            <img src={rightPassiveArrowIcon} alt="rightPassiveArrowIcon" />  :
            <img src={rightActiveArrowIcon} alt="rightActiveArrowIcon" />  
          }
        </button>
      </div>
    </div>
  )
});

export default PaginationPages;
