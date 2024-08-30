export function renderCustomer(customers) {
  return customers
    .map(
      customer => `
    <tr>
      <td>${customer.name}</td>
      <td>${customer.company}</td>
      <td>${customer.phone}</td>
      <td>${customer.email}</td>
      <td>${customer.country}</td>
       <td > 
     <span class="${
       customer.status
         ? 'customer-list_status_true'
         : 'customer-list_status_false'
     }">
    ${customer.status ? 'Active' : 'Inactive'}
  </span>
       </td>
    </tr>
  `
    )
    .join('');
}
