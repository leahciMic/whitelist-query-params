import _ from 'lodash/fp';
import nodeUrl from 'url';

function parseUrl(url) {
  return _.omit(['search', 'hash'], nodeUrl.parse(url, true));
}

export default function filterParams(url, whitelist) {
  const parsedUrl = parseUrl(url);
  return nodeUrl.format(_.set('query', _.pick(whitelist, parsedUrl.query), parsedUrl));
}
