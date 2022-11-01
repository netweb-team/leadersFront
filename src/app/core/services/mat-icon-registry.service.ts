import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { matIconsRegistry } from '../mat-icons-registry';

@Injectable({
  providedIn: 'root'
})
export class MatIconRegistryService {
  constructor(
    private readonly _matIconRegistry: MatIconRegistry,
    private readonly _domSanitizer: DomSanitizer,
) {
    this.registerCustomIcons();
}

private registerCustomIcons() {
    matIconsRegistry.forEach(({ iconName, imageSource }) => {
        this._matIconRegistry.addSvgIcon(
            iconName,
            this._domSanitizer.bypassSecurityTrustResourceUrl(imageSource),
        );
    });
}
}
