export interface Isponsor {

    id: number,
    sponsor_code: number,
    sponsor_name: string,
    sponsor_type: string,
    sponsor_ID: 901313113,
    address: string,
    postal_code: string,
    phone: string,
    email: string,
    max_limit: string,
    financial_limit: string,
    time_limit: number,
    active: number,
    created_by: number,
    updated_by: null,
    created_at: string,
    updated_at: string,
    created_by_name: string,
    updated_by_name: null,
    contact_officers: [
        {
            id: number,
            sponsor_id: number,
            contact_officer_name: string,
            phone: string,
            email: string,
            created_at: string,
            updated_at: string
        }
    ],
}
