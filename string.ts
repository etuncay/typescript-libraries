export class String {
    public static Empty = '';

    public static IsUndefinedOrNullOrEmpty(str) {

      if ( str === undefined) { return true; }
      if ( str === null) { return true; }
      if ( str.toString().trim() === '') { return true; }

      return false;
    }

    public static isNullOrWhiteSpace(value: string): boolean {
      try {
        if (value == null || value === 'undefined') {
          return false;
        }

        return value.replace(/\s/g, '').length < 1;
      } catch (e) {
        return false;
      }
    }

    public static Format(value, ...args): string {
      try {
        return value.replace(/{(\d+(:.*)?)}/g, function (match, i) {
          const s = match.split(':');
          if (s.length > 1) {
            i = i[0];
            match = s[1].replace('}', '');
          }
          const arg = String.formatPattern(match, args[i]);
          return typeof arg !== 'undefined' && arg != null ? arg : String.Empty;
        });
      } catch (e) {
        return String.Empty;
      }
    }

    private static formatPattern(match, arg): string {
      switch (match) {
        case 'L':
          arg = arg.toLowerCase();
          break;
        case 'U':
          arg = arg.toUpperCase();
          break;
        default:
          break;
      }

      return arg;
    }
  }
