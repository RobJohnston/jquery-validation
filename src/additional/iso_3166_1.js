/*
ISO 3166-1 numeric codes are three digit codes that represent countries, dependent territories, and special areas of geographical interest.
This function validate that an ISO 3166-1 alpha-2 code is officially assigned.
                
References:
https://en.wikipedia.org/wiki/ISO_3166-1_numeric
*/
$.validator.addMethod( "iso_3166_1_numeric", function ( value, element ) {
    var re = /^0(0[48]|1[026]|2[048]|3[126]|4[048]|5[0126]|6[048]|7[0246]|8[46]|9[026])|1(0[048]|1[26]|2[04]|3[26]|4[048]|5[268]|6[26]|7[0458]|8[048]|9[126])|2(0[348]|1[248]|2[26]|3[1-489]|4[268]|5[048]|6[0268]|7[056]|88|9[26])|3(0[048]|1[26]|2[048]|3[246]|4[048]|5[26]|6[048]|7[26]|8[048]|9[28])|4(0[048]|1[0478]|2[268]|3[048]|4[026]|5[048]|6[26]|7[048]|8[04]|9[2689])|5(0[048]|1[26]|2[048]|3[13-5]|4[08]|5[48]|6[26]|7[048]|8[013-6]|9[18])|6(0[048]|1[26]|2[046]|3[048]|4[236]|5[249]|6[0236]|7[048]|8[268]|9[04])|7(0[2-6]|1[06]|2[489]|32|4[048]|5[26]|6[0248]|7[26]|8[048]|9[2568])|8(0[047]|18|26|3[1-4]|40|5[048]|6[02]|76|8[27]|94)$/;

    return this.optional( element ) || value.length == 2 && re.test( value );
}, "Please specify a valid numeric country code.");

/*
ISO 3166-1 alpha-2 codes are two-letter codes that represent countries, dependent territories, and special areas of geographical interest.
This function validate that an ISO 3166-1 alpha-2 code is officially assigned.
        
References:
https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
*/
$.validator.addMethod( "iso_3166_1_alpha_2", function ( value, element ) {
    var re = /^A[^ABCHJKNPVY]|B[^CKPUX]|C[^BEJPQST]|D[EJKMOZ]|E[CEGHRST]|F[IJKMOR]|G[^CJKOVXZ]|H[KMNRTU]|I[DEL-OQ-T]|J[EMOP]|K[EGHIMNPRWYZ]|L[ABCIKR-VY]|M[^BIJ]|N[ACEFGILOPRUZ]|OM|P[AE-HK-NRSTWY]|QA|R[EOSUW]|S[^FPQUW]|T[^ABEIPQSUXY]|U[AGMSYZ]|V[ACEGINU]|WF|WS|YE|YT|Z[AMW]$/;

    return this.optional( element ) || value.length == 2 && re.test( value );
}, "Please specify a valid two-letter country code.");

/*
ISO 3166-1 alpha-3 codes are three-letter codes that represent countries, dependent territories, and special areas of geographical interest.
This function validate that an ISO 3166-1 alpha-3 code is officially assigned.

References:
https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
*/
$.validator.addMethod( "iso_3166_1_alpha_3", function ( value, element ) {
    var re = /^A(BW|FG|GO|IA|L[AB]|ND|R[EGM]|SM|T[AFG]|U[ST]|ZE)|B(DI|E[LNS]|FA|G[DR]|H[RS]|IH|L[MRZ]|MU|OL|R[ABN]|TN|VT|WA)|C(A[FN]|CK|H[ELN]|IV|MR|O[DGKLM]|PV|RI|U[BW]|XR|Y[MP]|ZE)|D(EU|JI|MA|NK|OM|ZA)|E(CU|GY|RI|S[HPT]|TH)|F(IN|JI|LK|R[AO]|SM)|G(AB|BR|EO|GY|HA|I[BN]|LP|MB|N[BQ]|R[CDL]|TM|U[FMY])|H(KG|MD|ND|RV|TI|UN)|I(DN|MN|ND|OT|R[LNQ]|S[LR]|TA)|J(AM|EY|OR|PN)|K(AZ|EN|GZ|HM|IR|NA|OR|WT)|L(AO|B[NRY]|CA|IE|KA|SO|TU|UX|VA)|M(A[CFR]|CO|D[AGV]|EX|HL|KD|L[IT]|MR|N[EGP]|OZ|RT|SR|TQ|US|WI|Y[ST])|N(AM|CL|ER|FK|GA|I[CU]|LD|OR|PL|RU|ZL)|OMN|P(A[KN]|CN|ER|HL|LW|NG|OL|R[IKTY]|SE|YF)|QAT|R(EU|OU|US|WA)|S(AU|DN|EN|G[PS]|HN|JM|L[BEV]|MR|OM|PM|RB|SD|TP|UR|V[KN]|W[EZ]|XM|Y[CR])|T(C[AD]|GO|HA|JK|K[LM]|LS|ON|TO|U[NRV]|WN|ZA)|U(GA|KR|MI|RY|SA|ZB)|V(AT|CT|EN|GB|IR|NM|UT)|W(LF|SM)|YEM|Z(AF|MB|WE)$/;

    return this.optional(element) || value.length == 3 && re.test( value );
}, "Please specify a valid three-letter country code." );
