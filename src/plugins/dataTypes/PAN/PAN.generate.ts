import { GenerationData, DTGenerateReturnType } from '../../../../types/dataTypes';
import { ExportTypeMetadata } from '../../../../types/exportTypes';


const creditCardData = {
	visa: {
		prefix: [4539, 4556, 4916, 4532, 4929, 40240071, 4485, 4716, 4],
		formats: [
			'XXXXXXXXXXXXX',
			'XXXX XXX XX XXXX',
			'XXXXXXXXXXXXXXXX',
			'XXXX XXXX XXXX XXXX',
			'XXXXXX XXXXXX XXXX',
			'XXX XXXXX XXXXX XXX',
			'XXXXXX XXXXXXXXXX'
		]
	},
	visaElectron: {
		prefix: [4026, 417500, 4508, 4844, 4913, 4917],
		formats: [
			'XXXXXXXXXXXXXXXX',
			'XXXX XXXX XXXX XXXX',
			'XXXXXX XXXXXX XXXX',
			'XXX XXXXX XXXXX XXX',
			'XXXXXX XXXXXXXXXX'
		]
	},
	mastercard: {
		prefix: [51, 52, 53, 54, 55],
		formats: [
			'XXXXXXXXXXXXXXXX',
			'XXXX XXXX XXXX XXXX',
			'XXXXXX XXXXXX XXXX',
			'XXX XXXXX XXXXX XXX',
			'XXXXXX XXXXXXXXXX'
		]
	},
	amex: {
		prefix: [34, 37],
		formats: [
			'XXXXXXXXXXXXXXX',
			'XXXX XXXXXX XXXXX'
		]
	},
	discover: {
		prefix: [6011, 644, 645, 646, 647, 648, 649, 65],
		formats: [
			'XXXXXXXXXXXXXXXX',
			'XXXX XXXX XXXX XXXX',
			'XXXXXX XXXXXX XXXX',
			'XXX XXXXX XXXXX XXX',
			'XXXXXX XXXXXXXXXX'
		]
	},
	carteBlanche: {
		prefix: [300, 301, 302, 303, 304, 305],
		formats: [
			'XXXXXXXXXXXXXXX',
			'XXXX XXXXXX XXXXX'
		]
	},
	dinersClubInt: {
		prefix: [36],
		formats: [
			'XXXXXXXXXXXXXXX',
			'XXXX XXXXXX XXXXX'
		]
	},
	dinersClubEnRoute: {
		prefix: [2014, 2149],
		formats: [
			'XXXXXXXXXXXXXXX',
			'XXXX XXXXXX XXXXX'
		]
	},
	jcb15: {
		prefix: [2131, 1800],
		formats: [
			'XXXXXXXXXXXXXXX',
			'XXXX XXXXXX XXXXX',
			'XXXXXXXXXXXXXXXX',
			'XXXX XXXX XXXX XXXX',
			'XXXXXX XXXXXX XXXX',
			'XXX XXXXX XXXXX XXX',
			'XXXXXX XXXXXXXXXX'
		]
	},
	jcb16: {
		prefix: [31, 309],
		formats: [
			'XXXXXXXXXXXXXXX',
			'XXXX XXXXXX XXXXX',
			'XXXXXXXXXXXXXXXX',
			'XXXX XXXX XXXX XXXX',
			'XXXXXX XXXXXX XXXX',
			'XXX XXXXX XXXXX XXX',
			'XXXXXX XXXXXXXXXX'
		]
	},
	maestro: {
		prefix: [5018, 5038, 6304, 6759, 6761, 6762, 6763, 5893, 56, 57, 58],
		formats: [
			'XXXXXXXXXXXX',
			'XXXXXXXXXXXXX',
			'XXXX XXX XX XXXX',
			'XXXXXXXXXXXXXX',
			'XXXX XXXXXX XXXX',
			'XXXXXXXXXXXXXXX',
			'XXXX XXXXXX XXXXX',
			'XXXXXXXXXXXXXXXX',
			'XXXX XXXX XXXX XXXX',
			'XXXXXX XXXXXX XXXX',
			'XXX XXXXX XXXXX XXX',
			'XXXXXX XXXXXXXXXX',
			'XXXXXXXXXXXXXXXXX',
			'XXXXXXXXXXXXXXXXXX',
			'XXXXXXXXXXXXXXXXXXX',
			'XXXXXX XX XXXX XXXX XXX'
		]
	},
	solo: {
		prefix: [6334, 6767],
		formats: [
			'XXXXXXXXXXXXXXXX',
			'XXXX XXXX XXXX XXXX',
			'XXXXXX XXXXXX XXXX',
			'XXX XXXXX XXXXX XXX',
			'XXXXXX XXXXXXXXXX',
			'XXXXXXXXXXXXXXXXXX',
			'XXXXXXXXXXXXXXXXXXX',
			'XXXXXX XX XXXX XXXX XXX'
		]
	},
	switch: {
		prefix: [4903, 4905, 4905, 4911, 4936, 564182, 633110, 6333, 6759],
		formats: [
			'XXXXXXXXXXXXXXXX',
			'XXXX XXXX XXXX XXXX',
			'XXXXXX XXXXXX XXXX',
			'XXX XXXXX XXXXX XXX',
			'XXXXXX XXXXXXXXXX',
			'XXXXXXXXXXXXXXXXXX',
			'XXXXXXXXXXXXXXXXXXX',
			'XXXXXX XX XXXX XXXX XXX'
		]
	},
	laser: {
		prefix: [6304, 6706, 6771, 6709],
		formats: [
			'XXXXXXXXXXXXXXXX',
			'XXXX XXXX XXXX XXXX',
			'XXXXXX XXXXXX XXXX',
			'XXX XXXXX XXXXX XXX',
			'XXXXXX XXXXXXXXXX',
			'XXXXXXXXXXXXXXXXX',
			'XXXXXXXXXXXXXXXXXX',
			'XXXXXXXXXXXXXXXXXXX',
			'XXXXXX XX XXXX XXXX XXX'
		]
	}
};

// data: GenerationData
export const generate = (): DTGenerateReturnType => {
	return { display: '' };
};


/*
	public function __construct($runtimeContext) {
		for ($i=622126; $i<=622925; $i++) {
            self::$creditCardData["discover"][] = $i;
		}
		for ($i=3528; $i<=3589; $i++) {
            self::$creditCardData["jcb16"][] = $i;
		}
		parent::__construct($runtimeContext);
	}

	// TODO why is `length` necessary? Very confusing.
	public function generate($generator, $generationContextData) {
		$options = $generationContextData["generationOptions"];

		if ($options["cc_brand"] == "rand_card") {
			$options = $this->setRandomCardInfo($options);
		}

		$ccLength    = self::getRandomPANLength($options["cc_length"]);
		$ccFormat    = self::getRandomPANFormat($options["cc_format"], $ccLength);
		$ccSeparator = self::getRandomPANSeparator($options["cc_separator"]);

		$ccData = self::getCreditCardData($options["cc_brand"]);
		$card = self::generateCreditCardNumber($ccData["prefix"], $ccLength);
		$cardNumber = $this->convertFormat($ccLength, $ccFormat, $ccSeparator, $card);

		if (empty($cardNumber)) {
			$cardNumber = "$ccLength, $ccFormat, {$options["cc_brand"]}, {$options["cc_format"]}";
		}
		return array(
			"display" => $cardNumber
		);
	}


	public function setRandomCardInfo($options) {
		$selectedCard = $options["cc_random_card"][array_rand($options["cc_random_card"])];

		if ($selectedCard == "jcb") {
			$jcbCards = array("jcb15", "jcb16");
			$selectedCard = $jcbCards[mt_rand(0, 1)];
		}

		$cardData = self::getCreditCardData($selectedCard);

		$options["cc_brand"] = $selectedCard;
		$options["cc_format"] = $cardData["formats"][array_rand($cardData["formats"])];
		$options["cc_length"] = self::getRandomPANLength($cardData["length"]);

		return $options;
	}

	public function getRowGenerationOptionsUI($generator, $postdata, $colNum, $numCols) {
		return array(
			"cc_brand"	     => $postdata["dtExample_$colNum"],
			"cc_separator"   => $postdata["dtOptionPAN_sep_$colNum"],
			"cc_format"      => $postdata["dtOption_$colNum"],
			"cc_length"      => $postdata["dtOptionPAN_digit_$colNum"],
			"cc_random_card" => $postdata["dtOptionPAN_randomCardFormat_$colNum"]
		);
	}

	public function getRowGenerationOptionsAPI($generator, $json, $numCols) {
		return array(
			"cc_brand"	     => $json->settings->brand,
			"cc_separator"   => property_exists($json->settings, "separator") ? $json->settings->separator : " ",
			"cc_format"      => $json->settings->format,
			"cc_length"      => $json->settings->length,
			"cc_random_card" => $json->settings->random_card
		);
	}

	* @param $ccLength
	 * @param $ccFormat
	 * @param $ccSeparator
	 * @param $ccNumber
	 * @return array|bool|string
	private static function convertFormat($ccLength, $ccFormat, $ccSeparator, $ccNumber) {

		// TODO pity we need this extra test on each call
		if ($ccLength == strlen($ccNumber)) {
			$a = self::convertXtoNumber($ccFormat, $ccNumber);

			if ($a == $ccNumber) {
				return $a;
			} else {
				return implode($ccSeparator, $a);
			}
		} else {
			return false;
		}
	}

	 * Convert X's to the specified number
	private static function convertXtoNumber($chosen_format, $ccnumber){
		$positions = array();
		$pos = -1;
		while (($pos = strpos($chosen_format, " ", $pos+1)) !== false) {
			$positions[] = $pos;
		}

		if (empty($positions)) {
			return $ccnumber;
		}

		$result   = array();
		$result_f = array();
		$j = 1;

		$numPositions = count($positions);
		for ($i=0; $i<$numPositions; $i++) {
			$result[$i] = substr($ccnumber, 0, $positions[$i]-$i);
		}

		$result_f[0] = ($result[0]);
		for ($i=0; $i<$numPositions-1; $i++) {
			$result_f[$j] = substr($result[$j], $positions[$i]-$i);
			$j++;
		}
		$result_f[$numPositions] = substr($ccnumber, ($positions[$numPositions-1])-($numPositions-1));

		return $result_f;
	}


	// very confusing function. What does this do exactly? Why is it necessary?
	private static function getRandomPANFormat($userSelectedFormats, $randCardLength) {

		// if no format is selected then by default continuous number of that length will be displayed
		$defaultFormat = str_repeat("X", $randCardLength);
		if (empty($userSelectedFormats)) {
			return $defaultFormat;
		}

		// for ease of use, the API lets you pass formats as an array
		$formats = (is_array($userSelectedFormats)) ? $userSelectedFormats : explode("\n", $userSelectedFormats);

		$matchingFormats = array();
		foreach ($formats as $currFormat) {
			$count_X = 0; // get count of X's to match with the card length

			$len = strlen($currFormat);
			for ($i=0; $i<$len; $i++) {
				if ($currFormat[$i] == "X") { // PHP version of a charAt
					$count_X++;
				}
			}
			if ($count_X == $randCardLength) {
				$matchingFormats[] = $currFormat;
			}
		}

		if (empty($matchingFormats)) {
			return $defaultFormat;
		} else {
			$chosenFormat = $matchingFormats[mt_rand(0, count($matchingFormats)-1)];
			return trim($chosenFormat);
		}
	}

	private static function getRandomPANSeparator($separators) {
		$separatorList = explode("|", $separators);
		$chosenSep = $separatorList[rand(0, count($separatorList)-1)];

		// if no separator was entered
		if ($separators == "") {
			$chosenSep = " ";
		}

		return $chosenSep;
	}


	private static function getRandomPANLength($userSelectedLength) {
		// if there's more than 1 card length then pick a random one
		if ($userSelectedLength == "12-19") {
			$userSelectedLength = "12,13,14,15,16,17,18,19";
		} else if ($userSelectedLength == "16-19") {
			$userSelectedLength = "16,17,18,19";
		}

		$lengths = explode(",", $userSelectedLength);
		$chosenLength = 0;
		if (count($lengths) >= 1) {
			$chosenLength = $lengths[mt_rand(0, count($lengths)-1)];
		}

		return $chosenLength;
	}

	// --------------------------------------------------------------------------------------------
	// Public functions

	public static function generateCreditCardNumber($prefixList, $length) {
		$ccNumber = $prefixList[array_rand($prefixList)];

		// generate digits
		$count = strlen($ccNumber);
		while ($count < ($length - 1)) {
			$ccNumber .= mt_rand(0, 9);
			$count++;
		}

		// calculate sum
		$sum = 0;
		$pos = 0;

		$reversedCCnumber = strrev($ccNumber);
		while ($pos < $length - 1) {
			$odd = $reversedCCnumber[$pos]*2;
			if ($odd > 9) {
				$odd -= 9;
			}
			$sum += $odd;

			if ($pos != ($length - 2)) {
				$sum += $reversedCCnumber[$pos+1];
			}
			$pos += 2;
		}

		// calculate check digit
		$checkDigit = ((floor($sum/10) + 1) * 10 - $sum) % 10;
		$ccNumber .= $checkDigit;

		return $ccNumber;
	}


	public static function getCreditCardData($ccBrand) {
		$data = array();
		reset(self::$creditCardData);
		while (list($currBrand, $ccData) = each(self::$creditCardData)) {
			if ($ccBrand != $currBrand) {
				continue;
			}
			$data = $ccData;
		}
		return $data;
	}

	public static function getAllCreditCardData() {
		return self::$creditCardData;
	}
*/


export const getMetadata = (): ExportTypeMetadata => ({
	sql: {
		field: 'varchar(255)',
		field_Oracle: 'varchar2(255)',
		field_MSSQL: 'VARCHAR(255) NULL'
	}
});