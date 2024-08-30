import { user } from '../data/userInfo';
import { getTotalCustomers } from './api-service';
import { refs } from './refs';
import { renderCustomer } from './render-customerItem';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export function renderHelloHeader(user) {
  return `Hello Evano \u{1F44B},`;
}

refs.hello.innerHTML = renderHelloHeader(user);
const totalItems = 100;
const limit = 8;

export async function handleRenderCustomerTable(page = 1) {
  try {
    const customers = await getTotalCustomers(page, limit);
    console.log('customers :>> ', customers);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const start = (page - 1) * limit + 1;
    const end = Math.min(page * limit, totalItems);
    if (customers.length > 0) {
      refs.customersTable.innerHTML = `
        <table class="customer-table">
          <thead  class="customer-table_title">
            <tr>
              <th>Customer Name</th>
              <th>Company</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Country</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody class="customer-list">
            ${renderCustomer(customers)}
          </tbody>
        </table>
      `;
      refs.customersListInfo.innerHTML = `Showing ${start} to ${end} of ${totalItems} entries`;
    } else {
      refs.customersList.innerHTML = `<p>Not found</p>`;
    }
  } catch (error) {
    console.log(error);
  }
}

handleRenderCustomerTable();

const paginationOptions = {
  totalItems: totalItems, // Загальна кількість елементів
  itemsPerPage: limit, // Кількість елементів на сторінку
  visiblePages: 5,
  page: 1, // Початкова сторінка
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
  lastPage: true,
};

const pagination = new Pagination(refs.pagination, paginationOptions);

pagination.on('beforeMove', async event => {
  const currentPage = event.page;
  handleRenderCustomerTable(currentPage);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
