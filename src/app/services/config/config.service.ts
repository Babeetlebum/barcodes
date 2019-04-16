import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ConfigService {
    protected config = {
        apiEndPoint: "",
        projectName: "User Tool",
    };

    public get(label: string): string {
        if (this.config[label] == null) {
            throw new Error(`Configuration for '${label}' doesn't exist`);
        }
        return this.config[label];
    }
}
