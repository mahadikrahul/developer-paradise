const getAmountWithComma = (amount) => {
  let nf = new Intl.NumberFormat("en-In");
  let amountWithCommaString = nf.format(amount);
  return amountWithCommaString;
};

const getWordsFromAmount = (amount) => {
  var sglDigit = [
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ],
    dblDigit = [
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ],
    tensPlace = [
      "",
      "Ten",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ],
    handle_tens = function (dgt, prevDgt) {
      return 0 === dgt
        ? ""
        : " " + (1 === dgt ? dblDigit[prevDgt] : tensPlace[dgt]);
    },
    handle_utlc = function (dgt, nxtDgt, denom) {
      return (
        (0 !== dgt && 1 !== nxtDgt ? " " + sglDigit[dgt] : "") +
        (0 !== nxtDgt || dgt > 0 ? " " + denom : "")
      );
    };

  var str = "",
    digitIdx = 0,
    digit = 0,
    nxtDigit = 0,
    words = [];
  if (((amount += ""), isNaN(parseInt(amount)))) str = "";
  else if (parseInt(amount) > 0 && amount.length <= 10) {
    for (digitIdx = amount.length - 1; digitIdx >= 0; digitIdx--)
      switch (
        ((digit = amount[digitIdx] - 0),
        (nxtDigit = digitIdx > 0 ? amount[digitIdx - 1] - 0 : 0),
        amount.length - digitIdx - 1)
      ) {
        case 0:
          words.push(handle_utlc(digit, nxtDigit, ""));
          break;
        case 1:
          words.push(handle_tens(digit, amount[digitIdx + 1]));
          break;
        case 2:
          words.push(
            0 !== digit
              ? " " +
                  sglDigit[digit] +
                  " Hundred" +
                  (0 !== amount[digitIdx + 1] && 0 !== amount[digitIdx + 2]
                    ? " and"
                    : "")
              : ""
          );
          break;
        case 3:
          words.push(handle_utlc(digit, nxtDigit, "Thousand"));
          break;
        case 4:
          words.push(handle_tens(digit, amount[digitIdx + 1]));
          break;
        case 5:
          words.push(handle_utlc(digit, nxtDigit, "Lakh"));
          break;
        case 6:
          words.push(handle_tens(digit, amount[digitIdx + 1]));
          break;
        case 7:
          words.push(handle_utlc(digit, nxtDigit, "Crore"));
          break;
        case 8:
          words.push(handle_tens(digit, amount[digitIdx + 1]));
          break;
        case 9:
          words.push(
            0 !== digit
              ? " " +
                  sglDigit[digit] +
                  " Hundred" +
                  (0 !== amount[digitIdx + 1] || 0 !== amount[digitIdx + 2]
                    ? " and"
                    : " Crore")
              : ""
          );
          break;
        default:
          break;
      }
    str = words.reverse().join("");
  } else str = "";
  return str;
};

export { getAmountWithComma, getWordsFromAmount };
