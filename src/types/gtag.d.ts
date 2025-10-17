interface GTagEvent {
    action: string;
    category: string;
    label: string;
    value: number;
}

interface GTagConfig {
    page_title?: string;
    page_path?: string;
    page_location?: string;
    send_page_view?: boolean;
}

interface GTagEventParams {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: string | number | boolean | undefined;
}

type GTagFunction = {
    (command: 'config', targetId: string, config?: GTagConfig): void;
    (command: 'event', action: string, params: GTagEventParams): void;
    (command: 'js', date: Date): void;
    (command: 'set', config: GTagConfig): void;
};

type DataLayerItem = {
    event?: string;
    [key: string]: string | number | boolean | undefined;
};

declare global {
    interface Window {
        gtag: GTagFunction;
        dataLayer: Array<DataLayerItem>;
    }
}