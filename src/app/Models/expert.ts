export class Expert{
    constructor(
        public expert_id: number,
        public nom: string,
        public prenom: string,
        public role: string,
        public domaine: string,
        public adresse_mail: string,
        public telephone: string,
        public pays: string,
        public ville: string,
        public annee_experience?: number,
        public nombre_personne_a_noter?: number,
        public note_moyenne?: number,
        public montant_commission?: number
    ){

    }
}