/**
 * Matches CA phone number format and Numbering Plan Area (NPA), a.k.a. area code.
 *
 * See also "phoneUS", which validates a North American Numbering Plan (NANP) number.
 */
$.validator.addMethod( "phoneCA", function( phone_number, element ) {

	// Some quick simple tests to prevent needless work.
	if ( this.optional( element ) ) {
		return true;
	}

	phone_number = phone_number.replace( /\s+/g, "" );

	if ( phone_number.length < 10 ) {
		return false;
	}

	var isValid = false;

	//Use the phoneUS regex to determine if it is a valid NANP number.
	var regexNANP = /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/;
	var match = phone_number.match( regexNANP );

	if ( match ) {

		//Group #2 from regexNANP will match the NPA (but could include brackets).
		var npa = match[ 2 ].replace( /\D/g, "" );

		//Check each NPA that is in service for Canada.
		var patterns = {
			"AB": "^403|587|780|825$",
			"BC": "^236|250|604|778$",
			"MB": "^204|431$",
			"NB": "^506$",
			"NL": "^709$",
			"NS": "^902|782$",
			"NT": "^867$",
			"ON": "^226|249|289|343|365|416|437|519|613|647|705|807|905$",
			"QC": "^418|438|450|514|579|581|819|873$",
			"SK": "^306|639$",
			"NG": "^600|622$"			//Non-geographic

			//"NU": "^867$",			//NU same as NT
			//"PE": "^902|782$",			//PE same as NS
			//"YT": "^867$",			//YT same as NT
			//"TF": "^800|844|855|866|877|888$",	//Toll-free
			//"PR": "^900$",			//Premium-rate
		};

		//Iterate over patterns until something matches.
		for ( var index in patterns ) {
			if ( !patterns.hasOwnProperty( index ) ) {
				continue;
			}

			if ( npa.match( patterns[ index ] ) != null ) {
				isValid = true;
				break;
			}
		}
	}

	return this.optional( element ) || isValid;
}, "Please specify a valid Canadian phone number" );
