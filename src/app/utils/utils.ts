import _ from './loadash';
export class Utility {
    static createQueryString(params: any) {
        const queryPairs = [];
        if (Object.keys(params).length >= 1) {
            _.each(params, (value, key) => {
                if (value !== '' && value !== undefined) {
                    queryPairs.push(key + '=' + value);
                }
            });
        }
        return '?' + queryPairs.join('&');
    }
}
