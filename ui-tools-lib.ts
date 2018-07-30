export class  UiToolsLib {

  public static getUrlParameter(name): string {
        const urlParams = new URLSearchParams(location.hash.split('?')[1]);
        return urlParams.get(name);
    }

    public static getFileBase64(img: File, callback: (img: any) => void) {
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result));
      reader.readAsDataURL(img);
    }

    public static timeDifference(day1, day2): TimeDifferenceDto {
      const vals = [365 * 24 * 60 * 60, 24 * 60 * 60, 60 * 60, 60];
      const res = new TimeDifferenceDto();
      const secs = Math.abs(Math.floor(( day2 - day1 ) / 1000));

      res.Year = Math.floor(secs / vals[0]);
      res.Day = Math.floor(secs / vals[1]);
      res.Hours = Math.floor(secs / vals[2]);
      res.Minutes = Math.floor(secs / vals[3]);
      if (secs) {
        res.Seconds = Math.floor(secs / vals[4]);
      }
      return res;
    }
}

class TimeDifferenceDto {
    Year: number;
    Day: number;
    Hours: number;
    Minutes: number;
    Seconds: number;
}
