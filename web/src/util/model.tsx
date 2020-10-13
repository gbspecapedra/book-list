export interface Book {
  id?: string;
  identifiers?: {
    lccn?: [string];
    isbn?: [string];
    oclc?: [string];
  };
  cover?: {
    small?: string;
  };
  title?: string;
  authors?: [{ name: string }];
  notes?: string;
  number_of_pages?: number;
  publish_date?: string;
  key?: string;
  read?: boolean;
  read_date?: Date;
}
