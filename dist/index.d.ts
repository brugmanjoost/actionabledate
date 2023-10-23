interface ActionableDateOptions {
    now?: Date;
    newDate: /**/ Date | null;
    oldDate: /**/ Date | null;
    oldDone: /**/ boolean | null;
    onSaveDate?: (date: Date | null) => void;
    onSaveDone: (done: boolean) => void;
    onAnnounce?: () => void;
    onMove?: () => void;
    onCancel?: () => void;
}
export declare function track(opts: ActionableDateOptions): Promise<void>;
export {};
