import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCompanyFields {
    contentTypeId: "company";
    fields: {
        about: EntryFields.Text;
        aboutImage: Asset;
        product1: EntryFields.Symbol;
        productImage1: Asset;
        product2: EntryFields.Symbol;
        productImage2: Asset;
        product3: EntryFields.Symbol;
        productImage3: Asset;
    }  
}

export type TypeCompany = Entry<TypeCompanyFields>;
