export class Base64 {
    public static encode  (str: string): string  {
        if (window
            && 'btoa' in window
            && 'encodeURIComponent' in window) {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
                return String.fromCharCode(('0x' + p1) as any);
            }));
        } else {
            return null;
        }
    }

    public static decode  (str: string): string  {
        if (window
            && 'atob' in window
            && 'decodeURIComponent' in window) {
            return decodeURIComponent(Array.prototype.map.call(atob(str), (c) => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        } else {
            return null;
        }
    }
}
