import { Dispatch } from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

/* eslint-disable complexity */
export function PaginationReactTableStyle({
  setPage,
  setPerPage,
  canPreviousPage,
  canNextPage,
  currentPage,
  perPage,
  totalPages,
  itemsByPageOptions,
}: {
  setPage: Dispatch<number>;
  setPerPage: Dispatch<number>;
  canPreviousPage: boolean;
  canNextPage: boolean;
  currentPage: number;
  perPage: number;
  totalPages: number;
  itemsByPageOptions: Array<number>;
}) {
  return (
    <div className='mb-10 bg-white py-3 text-gray-600 sm:flex'>
      {totalPages > 1 && (
        <div
          className='isolate mr-5 inline-flex -space-x-px shadow-sm '
          aria-label='Pagination'
        >
          <button
            className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-gray-50 px-2 py-1 text-sm font-medium hover:cursor-pointer hover:bg-gray-100 disabled:bg-white disabled:hover:cursor-auto disabled:hover:bg-white '
            onClick={() => {
              setPage(1);
            }}
            disabled={!canPreviousPage}
          >
           <KeyboardDoubleArrowLeftIcon/>
          </button>{' '}
          <button
            className='relative inline-flex items-center border border-gray-300 bg-gray-50 px-2 py-1 text-sm font-medium hover:cursor-pointer hover:bg-gray-100 disabled:bg-white disabled:hover:cursor-auto disabled:hover:bg-white '
            onClick={() => {
              setPage(currentPage - 1);
            }}
            disabled={!canPreviousPage}
          >
            <KeyboardArrowLeftIcon/>
          </button>
          <span className=' px-2 pt-1 font-bold'>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className='relative inline-flex items-center border border-gray-300 bg-gray-50 px-2 py-1 text-sm font-medium hover:cursor-pointer hover:bg-gray-100 disabled:bg-white disabled:hover:cursor-auto disabled:hover:bg-white '
            onClick={() => {
              setPage(currentPage + 1);
            }}
            disabled={!canNextPage}
          >
            <KeyboardArrowRightIcon/>
          </button>
          <button
            className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-2 py-1 text-sm font-medium hover:cursor-pointer hover:bg-gray-100 disabled:bg-white disabled:hover:cursor-auto disabled:hover:bg-white '
            onClick={() => {
              setPage(totalPages);
            }}
            disabled={!canNextPage}
          >
            <KeyboardDoubleArrowRightIcon/>
          </button>
        </div>
      )}
      <div className='mt-5 sm:mt-0'>
        {totalPages > 1 && (
          <>
            <input
              type='number'
              className=' w-32 rounded-l-md border-gray-300 p-1 text-center text-sm font-semibold placeholder:text-gray-600 focus:border-black focus:ring-black'
              placeholder='SET PAGE'
              min='1'
              onBlur={(e) => {
                e.currentTarget.value = '';
              }}
              max={totalPages}
              onChange={(e) => {
                setTimeout(() => {
                  const page = Number(e.target.value);
                  if (!page) return;
                  page <= totalPages ? setPage(page) : setPage(totalPages);
                }, 300);
              }}
            />{' '}
          </>
        )}
        <select
          className=' w-32 rounded-r-md border-gray-300 p-1 text-center text-sm font-semibold focus:border-black focus:ring-black'
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e.target.value));
            setPage(1);
          }}
        >
          {itemsByPageOptions.map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              SHOW {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
