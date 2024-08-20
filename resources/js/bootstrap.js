import 'datatables.net';
import './ui/Pages/Product/productPage';
import $ from 'jquery';
import axios from 'axios';
window.axios = axios;
window.$ = $;
window.jQuery = $;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

