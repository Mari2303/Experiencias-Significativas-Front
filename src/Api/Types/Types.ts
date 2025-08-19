export interface person {
    FirstName: string,
    MiddleName: string,
    FirstLastName: string,
    SecondLastName: string,
    DocumentType: number,
    IdentificationNumber: string,
    CodeDane: string,
    Username: string,
    Email: string,
    EmailInstitutional: string,
    Phone: number,
    Password: string,
}


export interface user {
  Username: string;
  Password: string;
  PersonId?: number;
}