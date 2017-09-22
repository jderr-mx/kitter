import Ember from 'ember';
import moment from 'moment';

const {
  Helper
} = Ember;

export function dateTimeFormat(params) {
  let [value, format] = params;
  if (!value) {
    return null;
  }
  if (!format) {
    format = 'ddd Do MMM YYYY h:mm a';
  }
  return moment(value).format(format);
}

export default Helper.helper(dateTimeFormat);
