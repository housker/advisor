export interface IntradayResponse extends TimeSeries<SnapShot> {
    "Meta Data": Metadata,
}

type DateString = `${number}-${number}-${number} ${number}:${number}:${number}`;
type Series = `Time Series (${number}min)`;

interface Metadata {
    "1. Information": string,
    "2. Symbol": string,
    "3. Last Refreshed": DateString,
    "4. Interval": string,
    "5. Output Size": string,
    "6. Time Zone": string
}

interface TimeSeries<T> {
    [key: Series]: {
        [key: string]: T;
    };
}

interface SnapShot {
    '1. open': `${number}.${number}`,
    '2. high': `${number}.${number}`,
    '3. low': `${number}.${number}`,
    '4. close': `${number}.${number}`,
    '5. volume': `${number}`
}
