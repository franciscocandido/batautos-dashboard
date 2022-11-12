export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      employees: {
        Row: {
          id: number;
          created_at: string | null;
          email: string | null;
          passport: number;
          phone: number;
          is_manager: boolean | null;
          name: string;
          surname: string;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          email?: string | null;
          passport: number;
          phone: number;
          is_manager?: boolean | null;
          name: string;
          surname: string;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          email?: string | null;
          passport?: number;
          phone?: number;
          is_manager?: boolean | null;
          name?: string;
          surname?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
