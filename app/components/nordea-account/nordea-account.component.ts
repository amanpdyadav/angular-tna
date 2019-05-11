import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nordea-account',
    templateUrl: './nordea-account.component.html',
    styleUrls: ['./nordea-account.component.scss']
})
export class NordeaAccountComponent implements OnInit {
    html = data;
    constructor() { }

    ngOnInit() {
    }

}

export const data = `
<div id="AS_174330-15861_01.03.2016_003_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.03.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.03.2016 - 31.03.2016</span><b>003 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">29.02.2016 Balance</td><td></td><td class="xb">689,60+</td></tr>
<tr><td><b>Entry date 03.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>160303258883E72023<br>&nbsp;</td><td>03.03.<br>03.03.</td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>01.02.-29.02.2016</pre></td><td class="xr">1</td><td class="xr">7,30-</td></tr>
<tr><td><span class="fr">J </span>160303258883E72023<br>&nbsp;</td><td>03.03.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,770 e       0,77
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,77-</td></tr>
<tr><td><span class="fr">J </span>160303258883E72023<br>&nbsp;</td><td>03.03.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Corporate Netbank, payments
174330-15861
Net payments to other banks      *)
      1     a    0,200 e       0,20
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,20-</td></tr>
<tr><td><span class="fr">J </span>160303258883E72023<br>&nbsp;</td><td>03.03.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      3     a    0,110 e       0,33
*) vat reg. 0%</pre></td><td class="xr">1</td><td>6,33-</td></tr>
<tr><td></td><td></td><td class="xb">03.03.2016 Balance</td><td></td><td class="xb">682,30+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>7,30-</td></tr>
<tr><td><b>Entry date 04.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1603032588NGR33083<br>&nbsp;</td><td>03.03.<br>03.03.</td><td><span class="fr">/J</span>TAMANG LAMA RAKESH<br>705 Reference Payment<br>Reference 1012</td><td class="xr">2</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1603032588NGM83646<br>&nbsp;</td><td>03.03.<br>03.03.</td><td><span class="fr">/J</span>CHHETRI BHIM<br>705 Reference Payment<br>Reference 1012</td><td class="xr">3</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1603042588NGNP0604<br>&nbsp;</td><td>04.03.<br>04.03.</td><td><span class="fr">/J</span>TIMILSINA SAJAN<br>705 Reference Payment<br>Reference 1012</td><td class="xr">4</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1603042588NGP82797<br>&nbsp;</td><td>04.03.<br>04.03.</td><td><span class="fr">/J</span>THAPA KESHAV KUMAR<br>705 Reference Payment<br>Reference 1012</td><td class="xr">5</td><td class="xr">12,00+</td></tr>
<tr><td></td><td></td><td class="xb">04.03.2016 Balance</td><td></td><td class="xb">730,30+</td></tr>
<tr><td></td><td></td><td><span class="fr">4<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">48,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 07.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1603052588NGPR1509<br>&nbsp;</td><td>05.03.<br>05.03.</td><td><span class="fr">/J</span>SITAULA KRISHNA<br>705 Reference Payment<br>Reference 1012</td><td class="xr">6</td><td class="xr">37,00+</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.03.2016_003_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.03.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.03.2016 - 31.03.2016</span><b>003 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">A </span>160307258875BF4151<br>&nbsp;</td><td>07.03.<br>07.03.</td><td><span class="fr">/J</span>Amazon web services<br>721 Card purchase<pre>USD           0,63 aws.amazon.co
KURSSI: 1,0678
Card number 4920210011152034   
Business filing ref  160303000457  </pre></td><td class="xr">7</td><td class="xr">0,59-</td></tr>
<tr><td></td><td></td><td class="xb">07.03.2016 Balance</td><td></td><td class="xb">766,71+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">37,00+<br>0,59-</td></tr>
<tr><td><b>Entry date 11.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1603112588NGPK0869<br>&nbsp;</td><td>11.03.<br>11.03.</td><td><span class="fr">/J</span>TIMILSINA SAJAN<br>705 Reference Payment<br>Reference 1012</td><td class="xr">8</td><td class="xr">25,00+</td></tr>
<tr><td></td><td></td><td class="xb">11.03.2016 Balance</td><td></td><td class="xb">791,71+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">25,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 17.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1603172588NGP11676<br>&nbsp;</td><td>17.03.<br>17.03.</td><td><span class="fr">/J</span>KHADKA DHRUBA<br>705 Reference Payment<br>Reference 1012</td><td class="xr">9</td><td class="xr">12,00+</td></tr>
<tr><td></td><td></td><td class="xb">17.03.2016 Balance</td><td></td><td class="xb">803,71+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">12,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 21.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1603212588NGRF1369<br>&nbsp;</td><td>21.03.<br>21.03.</td><td><span class="fr">/J</span>LINGDEN GANGA DHWAJ<br>705 Reference Payment<br>Reference 1012</td><td class="xr">10</td><td class="xr">12,00+</td></tr>
<tr><td></td><td></td><td class="xb">21.03.2016 Balance<br>Available balance</td><td></td><td class="xb">815,71+<br>815,71+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">12,00+<br>0,00+</td></tr>
<tr><td></td><td></td><td><span class="fr">8<br>2</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">134,00+<br>7,89-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">134,00+<br>7,89-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">159,00+<br>70,45-</td></tr>

<tr><td><div style="height: 047mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.04.2016_004_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>29.04.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.04.2016 - 30.04.2016</span><b>004 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">31.03.2016 Balance</td><td></td><td class="xb">815,71+</td></tr>
<tr><td><b>Entry date 04.04.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1604022588NGR91422<br>&nbsp;</td><td>02.04.<br>02.04.</td><td><span class="fr">/J</span>REGMI AMRIT<br>705 Reference Payment<br>Reference 1012</td><td class="xr">1</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1604042588NGPU0775<br>&nbsp;</td><td>04.04.<br>04.04.</td><td><span class="fr">/J</span>GURUNG SANJIB<br>705 Reference Payment<br>Reference 1012</td><td class="xr">2</td><td class="xr">12,00+</td></tr>
<tr><td></td><td></td><td class="xb">04.04.2016 Balance</td><td></td><td class="xb">839,71+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">24,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 05.04.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>160405258875CJ9981<br>&nbsp;</td><td>05.04.<br>05.04.</td><td><span class="fr">/J</span>Amazon web services<br>721 Card purchase<pre>USD           0,63 aws.amazon.co
KURSSI: 1,1250
Card number 4920210011152034   
Business filing ref  160403000240  </pre></td><td class="xr">3</td><td class="xr">0,56-</td></tr>
<tr><td><span class="fr">JE</span>160405258883E73602<br>&nbsp;</td><td>05.04.<br>05.04.</td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>01.03.-31.03.2016</pre></td><td class="xr">4</td><td class="xr">7,92-</td></tr>
<tr><td><span class="fr">J </span>160405258883E73602<br>&nbsp;</td><td>05.04.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,770 e       0,77
*) vat reg. 0%</pre></td><td class="xr">4</td><td>0,77-</td></tr>
<tr><td><span class="fr">J </span>160405258883E73602<br>&nbsp;</td><td>05.04.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Branch office services
174330-15861
Payments with a reference        *)
      8     a    0,130 e       1,04
*) vat reg. 0%</pre></td><td class="xr">4</td><td>1,04-</td></tr>
<tr><td><span class="fr">J </span>160405258883E73602<br>&nbsp;</td><td>05.04.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      1     a    0,110 e       0,11
*) vat reg. 0%</pre></td><td class="xr">4</td><td>6,11-</td></tr>
<tr><td></td><td></td><td class="xb">05.04.2016 Balance<br>Available balance</td><td></td><td class="xb">831,23+<br>831,23+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>2</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>8,48-</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>2</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">24,00+<br>8,48-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">24,00+<br>8,48-</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.04.2016_004_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>29.04.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.04.2016 - 30.04.2016</span><b>004 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">183,00+<br>78,93-</td></tr>

<tr><td><div style="height: 191mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.05.2016_005_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.05.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.05.2016 - 31.05.2016</span><b>005 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">29.04.2016 Balance</td><td></td><td class="xb">831,23+</td></tr>
<tr><td><b>Entry date 04.05.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>160504258875BO6691<br>&nbsp;</td><td>04.05.<br>04.05.</td><td><span class="fr">/J</span>Amazon web services<br>721 Card purchase<pre>USD           0,63 aws.amazon.co
KURSSI: 1,1250
Card number 4920210011152034   
Business filing ref  160503000406  </pre></td><td class="xr">1</td><td class="xr">0,56-</td></tr>
<tr><td><span class="fr">JE</span>160504258883E74311<br>&nbsp;</td><td>04.05.<br>04.05.</td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>01.04.-30.04.2016</pre></td><td class="xr">2</td><td class="xr">7,03-</td></tr>
<tr><td><span class="fr">J </span>160504258883E74311<br>&nbsp;</td><td>04.05.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,770 e       0,77
*) vat reg. 0%</pre></td><td class="xr">2</td><td>0,77-</td></tr>
<tr><td><span class="fr">J </span>160504258883E74311<br>&nbsp;</td><td>04.05.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Branch office services
174330-15861
Payments with a reference        *)
      2     a    0,130 e       0,26
*) vat reg. 0%</pre></td><td class="xr">2</td><td>0,26-</td></tr>
<tr><td><span class="fr">J </span>160504258883E74311<br>&nbsp;</td><td>04.05.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
*) vat reg. 0%</pre></td><td class="xr">2</td><td>6,00-</td></tr>
<tr><td><span class="fr">A </span>1605042588NGNQ0663<br>&nbsp;</td><td>04.05.<br>04.05.</td><td><span class="fr">/J</span>TAMANG SANDESH<br>705 Reference Payment<br>Reference 1012</td><td class="xr">3</td><td class="xr">12,00+</td></tr>
<tr><td></td><td></td><td class="xb">04.05.2016 Balance</td><td></td><td class="xb">835,64+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>2</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">12,00+<br>7,59-</td></tr>
<tr><td><b>Entry date 19.05.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1605192588NGPM0983<br>&nbsp;</td><td>19.05.<br>19.05.</td><td><span class="fr">/J</span>LAMA PRABIN<br>705 Reference Payment<br>Reference 1012</td><td class="xr">4</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1605192588NGR21018<br>&nbsp;</td><td>19.05.<br>19.05.</td><td><span class="fr">/J</span>GHIMIRE BIDHYA SAGAR<br>705 Reference Payment<br>Reference 1012</td><td class="xr">5</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1605192588WWP90273<br>&nbsp;571004-22032</td><td>19.05.<br>19.05.</td><td><span class="fr">/J</span>TURUN KAUPUNGIN KESKUSVIRASTO<br>720 Self service<pre>Indoor ground payment
00000000000128357185
FI2657100420002032                 
OKOYFIHHXXX                        </pre></td><td class="xr">6</td><td class="xr">356,97-</td></tr>
<tr><td></td><td></td><td class="xb">19.05.2016 Balance</td><td></td><td class="xb">502,67+</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.05.2016_005_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.05.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.05.2016 - 31.05.2016</span><b>005 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td></td><td></td><td><span class="fr">2<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">24,00+<br>356,97-</td></tr>
<tr><td><b>Entry date 20.05.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">  </span>SCTV3OT8BPIPB1D<br>&nbsp;</td><td>19.05.<br>20.05.</td><td><span class="fr">/A</span>BHATTARAI PRAKASH<br>710 Reference Payment<br>Reference 1012<pre>201605198E6524121420               
SCTV3OT8BPIPB1D                    </pre></td><td class="xr">7</td><td class="xr">12,00+</td></tr>
<tr><td></td><td></td><td class="xb">20.05.2016 Balance</td><td></td><td class="xb">514,67+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">12,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 25.05.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">  </span>160523593731ST2854<br>&nbsp;</td><td>23.05.<br>25.05.</td><td><span class="fr">/A</span>JOSHI AJAYA<br>710 Reference Payment<br>Reference 1012<pre>20160523MPAOKI-20160523593731ST2854</pre></td><td class="xr">8</td><td class="xr">12,00+</td></tr>
<tr><td></td><td></td><td class="xb">25.05.2016 Balance</td><td></td><td class="xb">526,67+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">12,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 27.05.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1605272588NGP21310<br>&nbsp;</td><td>27.05.<br>27.05.</td><td><span class="fr">/J</span>BARAL PURNA<br>705 Reference Payment<br>Reference 1012</td><td class="xr">9</td><td class="xr">42,00+</td></tr>
<tr><td><span class="fr">A </span>1605272588NGN41934<br>&nbsp;</td><td>27.05.<br>27.05.</td><td><span class="fr">/J</span>GIRI KALYAN<br>705 Reference Payment<br>Reference 1012</td><td class="xr">10</td><td class="xr">12,00+</td></tr>
<tr><td></td><td></td><td class="xb">27.05.2016 Balance</td><td></td><td class="xb">580,67+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">54,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 31.05.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">  </span>SCTU3RW4SRVSG1D<br>&nbsp;</td><td>30.05.<br>31.05.</td><td><span class="fr">/A</span>KARKI NINA BETTINA<br>710 Reference Payment<br>Reference 1012<pre>201605298E6544361577               
SCTU3RW4SRVSG1D                    </pre></td><td class="xr">11</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1605312588NGNW1626<br>&nbsp;</td><td>31.05.<br>31.05.</td><td><span class="fr">/J</span>CHHETRI BHIM<br>705 Reference Payment<br>Reference 1012</td><td class="xr">12</td><td class="xr">25,00+</td></tr>
<tr><td></td><td></td><td class="xb">31.05.2016 Balance<br>Available balance</td><td></td><td class="xb">617,67+<br>617,67+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">37,00+<br>0,00+</td></tr>
<tr><td></td><td></td><td><span class="fr">9<br>3</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">151,00+<br>364,56-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">151,00+<br>364,56-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">334,00+<br>443,49-</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.06.2016_006_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>30.06.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.06.2016 - 30.06.2016</span><b>006 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">31.05.2016 Balance</td><td></td><td class="xb">617,67+</td></tr>
<tr><td><b>Entry date 01.06.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1606012588NGR92823<br>&nbsp;</td><td>01.06.<br>01.06.</td><td><span class="fr">/J</span>LIMBU PRAJIL<br>705 Reference Payment<br>Reference 1012</td><td class="xr">1</td><td class="xr">12,00+</td></tr>
<tr><td></td><td></td><td class="xb">01.06.2016 Balance</td><td></td><td class="xb">629,67+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">12,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 02.06.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1606022588NGR51281<br>&nbsp;</td><td>02.06.<br>02.06.</td><td><span class="fr">/J</span>CHHETRI BHUWAN<br>705 Reference Payment<br>Reference 1012</td><td class="xr">2</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1606022588NGPF2855<br>&nbsp;</td><td>02.06.<br>02.06.</td><td><span class="fr">/J</span>CHAND THAMAN BAHADUR<br>705 Reference Payment<br>Reference 1012</td><td class="xr">3</td><td class="xr">9,99+</td></tr>
<tr><td></td><td></td><td class="xb">02.06.2016 Balance</td><td></td><td class="xb">651,66+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">21,99+<br>0,00+</td></tr>
<tr><td><b>Entry date 03.06.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>160603258883E73812<br>&nbsp;</td><td>03.06.<br>03.06.</td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>01.05.-31.05.2016</pre></td><td class="xr">4</td><td class="xr">9,35-</td></tr>
<tr><td><span class="fr">J </span>160603258883E73812<br>&nbsp;</td><td>03.06.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,770 e       0,77
*) vat reg. 0%</pre></td><td class="xr">4</td><td>0,77-</td></tr>
<tr><td><span class="fr">J </span>160603258883E73812<br>&nbsp;</td><td>03.06.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Branch office services
174330-15861
Payments with a reference        *)
      9     a    0,130 e       1,17
*) vat reg. 0%</pre></td><td class="xr">4</td><td>1,17-</td></tr>
<tr><td><span class="fr">J </span>160603258883E73812<br>&nbsp;</td><td>03.06.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Corporate Netbank, payments
174330-15861
Net payments to other banks      *)
      1     a    0,200 e       0,20
*) vat reg. 0%</pre></td><td class="xr">4</td><td>0,20-</td></tr>
<tr><td><span class="fr">J </span>160603258883E73812<br>&nbsp;</td><td>03.06.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
     11     a    0,110 e       1,21
*) vat reg. 0%</pre></td><td class="xr">4</td><td>7,21-</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.06.2016_006_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>30.06.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.06.2016 - 30.06.2016</span><b>006 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td></td><td></td><td class="xb">03.06.2016 Balance</td><td></td><td class="xb">642,31+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>9,35-</td></tr>
<tr><td><b>Entry date 06.06.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>160606258875HU2195<br>&nbsp;</td><td>06.06.<br>06.06.</td><td><span class="fr">/J</span>Amazon web services<br>721 Card purchase<pre>USD          18,96 aws.amazon.co
KURSSI: 1,0922
Card number 4920210011152034   
Business filing ref  160603000409  </pre></td><td class="xr">5</td><td class="xr">17,36-</td></tr>
<tr><td></td><td></td><td class="xb">06.06.2016 Balance</td><td></td><td class="xb">624,95+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>17,36-</td></tr>
<tr><td><b>Entry date 07.06.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>160607258875AX3990<br>&nbsp;</td><td>07.06.<br>07.06.</td><td><span class="fr">/J</span>LIDL TURKU PITKAMAKI MN16<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  160605815824  </pre></td><td class="xr">6</td><td class="xr">21,16-</td></tr>
<tr><td></td><td></td><td class="xb">07.06.2016 Balance<br>Available balance</td><td></td><td class="xb">603,79+<br>603,79+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>21,16-</td></tr>
<tr><td></td><td></td><td><span class="fr">3<br>3</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">33,99+<br>47,87-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">33,99+<br>47,87-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">367,99+<br>491,36-</td></tr>

<tr><td><div style="height: 082mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.07.2016_007_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>29.07.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.07.2016 - 31.07.2016</span><b>007 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">30.06.2016 Balance</td><td></td><td class="xb">603,79+</td></tr>
<tr><td><b>Entry date 05.07.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>160705258875CU1613<br>&nbsp;</td><td>05.07.<br>05.07.</td><td><span class="fr">/J</span>Amazon web services<br>721 Card purchase<pre>USD          18,48 aws.amazon.co
KURSSI: 1,0807
Card number 4920210011152034   
Business filing ref  160703000962  </pre></td><td class="xr">1</td><td class="xr">17,10-</td></tr>
<tr><td><span class="fr">JE</span>160705258883E72799<br>&nbsp;</td><td>05.07.<br>05.07.</td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>01.06.-30.06.2016</pre></td><td class="xr">2</td><td class="xr">7,27-</td></tr>
<tr><td><span class="fr">J </span>160705258883E72799<br>&nbsp;</td><td>05.07.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,770 e       0,77
*) vat reg. 0%</pre></td><td class="xr">2</td><td>0,77-</td></tr>
<tr><td><span class="fr">J </span>160705258883E72799<br>&nbsp;</td><td>05.07.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Branch office services
174330-15861
Payments with a reference        *)
      3     a    0,130 e       0,39
*) vat reg. 0%</pre></td><td class="xr">2</td><td>0,39-</td></tr>
<tr><td><span class="fr">J </span>160705258883E72799<br>&nbsp;</td><td>05.07.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      1     a    0,110 e       0,11
*) vat reg. 0%</pre></td><td class="xr">2</td><td>6,11-</td></tr>
<tr><td></td><td></td><td class="xb">05.07.2016 Balance</td><td></td><td class="xb">579,42+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>2</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>24,37-</td></tr>
<tr><td><b>Entry date 21.07.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1607212588NGP00037<br>&nbsp;</td><td>21.07.<br>21.07.</td><td><span class="fr">/J</span>SHERPA NYIMA DORJE LAMA<br>705 Reference Payment<br>Reference 1012</td><td class="xr">3</td><td class="xr">150,00+</td></tr>
<tr><td><span class="fr">A </span>1607212588NGNA0954<br>&nbsp;</td><td>21.07.<br>21.07.</td><td><span class="fr">/J</span>RAI MABINDRA<br>705 Reference Payment<br>Reference 1012</td><td class="xr">4</td><td class="xr">150,00+</td></tr>
<tr><td><span class="fr">A </span>1607212588NGMG1305<br>&nbsp;</td><td>21.07.<br>21.07.</td><td><span class="fr">/J</span>GHIMIRE NABIN<br>705 Reference Payment<br>Reference 1012</td><td class="xr">5</td><td class="xr">150,00+</td></tr>
<tr><td></td><td></td><td class="xb">21.07.2016 Balance</td><td></td><td class="xb">1.029,42+</td></tr>
<tr><td></td><td></td><td><span class="fr">3<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">450,00+<br>0,00+</td></tr>

<tr><td><div style="height: 008mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.07.2016_007_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>29.07.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.07.2016 - 31.07.2016</span><b>007 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><b>Entry date 22.07.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1607212588NGR32701<br>&nbsp;</td><td>21.07.<br>21.07.</td><td><span class="fr">/J</span>SHRESTHA SANDEEP KUMAR<br>705 Reference Payment<br>Reference 1012</td><td class="xr">6</td><td class="xr">150,00+</td></tr>
<tr><td><span class="fr">  </span>SCT238GLISBWE1B<br>&nbsp;</td><td>21.07.<br>22.07.</td><td><span class="fr">/A</span>RAJ KUMAR G.C.<br>710 Reference Payment<br>Reference 1012<pre>201607218E6686254929               
SCT238GLISBWE1B                    </pre></td><td class="xr">7</td><td class="xr">150,00+</td></tr>
<tr><td><span class="fr">A </span>1607222588NGP31679<br>&nbsp;</td><td>22.07.<br>22.07.</td><td><span class="fr">/J</span>PAUDYAL MADHU<br>705 Reference Payment<br>Reference 1012</td><td class="xr">8</td><td class="xr">150,00+</td></tr>
<tr><td></td><td></td><td class="xb">22.07.2016 Balance</td><td></td><td class="xb">1.479,42+</td></tr>
<tr><td></td><td></td><td><span class="fr">3<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">450,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 27.07.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>160727258875DZ1236<br>&nbsp;</td><td>27.07.<br>27.07.</td><td><span class="fr">/J</span>Hong Kong Turku Oy<br>721 Card purchase<pre>Raisio
Card number 4920210011152034   
Business filing ref  160726018760  </pre></td><td class="xr">9</td><td class="xr">169,69-</td></tr>
<tr><td></td><td></td><td class="xb">27.07.2016 Balance<br>Available balance</td><td></td><td class="xb">1.309,73+<br>1.309,73+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>169,69-</td></tr>
<tr><td></td><td></td><td><span class="fr">6<br>3</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">900,00+<br>194,06-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">900,00+<br>194,06-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">1.267,99+<br>685,42-</td></tr>

<tr><td><div style="height: 075mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.08.2016_008_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.08.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.08.2016 - 31.08.2016</span><b>008 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">29.07.2016 Balance</td><td></td><td class="xb">1.309,73+</td></tr>
<tr><td><b>Entry date 01.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1607302588NGNN0336<br>&nbsp;</td><td>30.07.<br>30.07.</td><td><span class="fr">/J</span>SHERPA NYIMA DORJE LAMA<br>705 Reference Payment<br>Reference 1012</td><td class="xr">1</td><td class="xr">50,00+</td></tr>
<tr><td><span class="fr">A </span>160801258875CM1954<br>&nbsp;</td><td>01.08.<br>01.08.</td><td><span class="fr">/J</span>DELI MARKET TURKU<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  160728160002  </pre></td><td class="xr">2</td><td class="xr">20,11-</td></tr>
<tr><td><span class="fr">A </span>160801258875DK0067<br>&nbsp;</td><td>01.08.<br>01.08.</td><td><span class="fr">/J</span>K SUPERMARKET ANNIKA<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  160729030678  </pre></td><td class="xr">3</td><td class="xr">12,93-</td></tr>
<tr><td><span class="fr">A </span>160801258875HU0937<br>&nbsp;</td><td>01.08.<br>01.08.</td><td><span class="fr">/J</span>LIDL ITAHARJU MN184<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  160729821240  </pre></td><td class="xr">4</td><td class="xr">44,90-</td></tr>
<tr><td><span class="fr">A </span>160801258875IU6842<br>&nbsp;</td><td>01.08.<br>01.08.</td><td><span class="fr">/J</span>K SUPERMARKET ANNIKA<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  160730056467  </pre></td><td class="xr">5</td><td class="xr">4,20-</td></tr>
<tr><td><span class="fr">A </span>160801258875LV3592<br>&nbsp;</td><td>01.08.<br>01.08.</td><td><span class="fr">/J</span>LIDL TURKU KESKUSTA MN257<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  160730821334  </pre></td><td class="xr">6</td><td class="xr">17,04-</td></tr>
<tr><td><span class="fr">A </span>160801258875LV3875<br>&nbsp;</td><td>01.08.<br>01.08.</td><td><span class="fr">/J</span>TOKMANNI VARISSUO<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  160730821335  </pre></td><td class="xr">7</td><td class="xr">13,98-</td></tr>
<tr><td><span class="fr">A </span>160801258875LV1531<br>&nbsp;</td><td>01.08.<br>01.08.</td><td><span class="fr">/J</span>PRISMA ITAHARJU<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  160730821339  </pre></td><td class="xr">8</td><td class="xr">40,67-</td></tr>
<tr><td></td><td></td><td class="xb">01.08.2016 Balance</td><td></td><td class="xb">1.205,90+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>7</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">50,00+<br>153,83-</td></tr>
<tr><td><b>Entry date 03.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>160803258883E70302<br>&nbsp;</td><td>03.08.<br>03.08.</td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>01.07.-31.07.2016</pre></td><td class="xr">9</td><td class="xr">7,77-</td></tr>

<tr><td><div style="height: 017mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.08.2016_008_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.08.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.08.2016 - 31.08.2016</span><b>008 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">J </span>160803258883E70302<br>&nbsp;</td><td>03.08.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,770 e       0,77
*) vat reg. 0%</pre></td><td class="xr">9</td><td>0,77-</td></tr>
<tr><td><span class="fr">J </span>160803258883E70302<br>&nbsp;</td><td>03.08.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Branch office services
174330-15861
Payments with a reference        *)
      6     a    0,130 e       0,78
*) vat reg. 0%</pre></td><td class="xr">9</td><td>0,78-</td></tr>
<tr><td><span class="fr">J </span>160803258883E70302<br>&nbsp;</td><td>03.08.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      2     a    0,110 e       0,22
*) vat reg. 0%</pre></td><td class="xr">9</td><td>6,22-</td></tr>
<tr><td></td><td></td><td class="xb">03.08.2016 Balance</td><td></td><td class="xb">1.198,13+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>7,77-</td></tr>
<tr><td><b>Entry date 05.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1608042588WWMJ0549<br>&nbsp;165235-190015</td><td>04.08.<br>04.08.</td><td><span class="fr">/J</span>LAMA PRABIN<br>720 Self service<pre>extra entry fee (Football) from
SHERPA NYIMA DORJE LAMA return to
Prabin&#039;s account.
FI2416523500190015                 
NDEAFIHHXXX                        </pre></td><td class="xr">10</td><td class="xr">50,00-</td></tr>
<tr><td><span class="fr">A </span>160805258875CM4674<br>&nbsp;</td><td>05.08.<br>05.08.</td><td><span class="fr">/J</span>Amazon web services<br>721 Card purchase<pre>USD          18,91 aws.amazon.co
KURSSI: 1,0975
Card number 4920210011152034   
Business filing ref  160803000447  </pre></td><td class="xr">11</td><td class="xr">17,23-</td></tr>
<tr><td></td><td></td><td class="xb">05.08.2016 Balance</td><td></td><td class="xb">1.130,90+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>2</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>67,23-</td></tr>
<tr><td><b>Entry date 08.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1608072588WWRI0147<br>&nbsp;800007-10102222</td><td>07.08.<br>07.08.</td><td><span class="fr">/A</span>OVH Hosting Oy<br>720 Self service<pre>00000000000561076829
FI1380000710102222                 
DABAFIHHXXX                        </pre></td><td class="xr">12</td><td class="xr">3,70-</td></tr>
<tr><td></td><td></td><td class="xb">08.08.2016 Balance</td><td></td><td class="xb">1.127,20+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>3,70-</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.08.2016_008_3" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.08.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;3<br>Period<br>01.08.2016 - 31.08.2016</span><b>008 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><b>Entry date 09.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1608082588NGRH2882<br>&nbsp;</td><td>08.08.<br>08.08.</td><td><span class="fr">/J</span>DEVKOTA KARKI SRIJANA<br>710 Deposit<pre>Revenue from food during the tourna
ment</pre></td><td class="xr">13</td><td class="xr">170,00+</td></tr>
<tr><td></td><td></td><td class="xb">09.08.2016 Balance</td><td></td><td class="xb">1.297,20+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">170,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 11.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1608112584LV320950<br>&nbsp;</td><td>11.08.<br>11.08.</td><td><span class="fr">/A</span>HELP NEPAL NETWORK, NEPAL BANG<br>720 Currency payment<br>  320950<pre>BANK LIMITED , NEWROAD
043952P
NPBBNPKA
WATER TANK , PANCHAKANYA SCHOOL
H</pre></td><td class="xr">14</td><td class="xr">500,00-</td></tr>
<tr><td><span class="fr">A </span>1608112584LV320950<br>&nbsp;</td><td>11.08.<br>11.08.</td><td><span class="fr">/J</span>Nordea Bank Finland Plc<br>730 Service fee VAT 0%<br>  320950<pre>Currency payment</pre></td><td class="xr">15</td><td class="xr">6,75-</td></tr>
<tr><td></td><td></td><td class="xb">11.08.2016 Balance</td><td></td><td class="xb">790,45+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>2</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>506,75-</td></tr>
<tr><td><b>Entry date 12.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>160812258875BC4120<br>&nbsp;</td><td>12.08.<br>12.08.</td><td><span class="fr">/J</span>OVH<br>721 Card purchase<pre>EUR          44,34 ROUBAIX
Card number 4920210011152034   
Business filing ref  160809162232  </pre></td><td class="xr">16</td><td class="xr">44,34-</td></tr>
<tr><td></td><td></td><td class="xb">12.08.2016 Balance</td><td></td><td class="xb">746,11+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>44,34-</td></tr>
<tr><td><b>Entry date 17.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">J </span>1608171743PM010125<br>&nbsp;</td><td>17.08.<br>17.08.</td><td><span class="fr">/J</span>Nordea Bank Finland Plc<br>730 Service fee VAT 0%<pre>BUSINESS VISA DEBIT CARD
ANNUAL CARD FEE
4920210011152034</pre></td><td class="xr">17</td><td class="xr">40,00-</td></tr>
<tr><td></td><td></td><td class="xb">17.08.2016 Balance</td><td></td><td class="xb">706,11+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>40,00-</td></tr>
<tr><td><b>Entry date 22.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1608192588WWMU0318<br>&nbsp;106535-314541</td><td>19.08.<br>19.08.</td><td><span class="fr">/J</span>SHERPA NYIMA DORJE LAMA<br>720 Self service<pre>FC Gaule Tournament Entry Fee.
FC Gurkha
FI5510653500314541                 
NDEAFIHHXXX                        </pre></td><td class="xr">18</td><td class="xr">150,00-</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.08.2016_008_4" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.08.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;4<br>Period<br>01.08.2016 - 31.08.2016</span><b>008 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">A </span>1608202588WWNN0035<br>&nbsp;106535-314541</td><td>20.08.<br>20.08.</td><td><span class="fr">/J</span>SHERPA NYIMA DORJE LAMA<br>720 Self service<pre> Game Deposit. FC Gurkha
FI5510653500314541                 
NDEAFIHHXXX                        </pre></td><td class="xr">19</td><td class="xr">50,00-</td></tr>
<tr><td></td><td></td><td class="xb">22.08.2016 Balance</td><td></td><td class="xb">506,11+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>2</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>200,00-</td></tr>
<tr><td><b>Entry date 23.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">  </span>SCT44HR78J6RE1F<br>&nbsp;</td><td>22.08.<br>23.08.</td><td><span class="fr">/A</span>MAHAT HARI KRISHNA<br>710 Deposit<pre>Food collection
201608208E6760094546               
SCT44HR78J6RE1F                    </pre></td><td class="xr">20</td><td class="xr">65,00+</td></tr>
<tr><td></td><td></td><td class="xb">23.08.2016 Balance</td><td></td><td class="xb">571,11+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">65,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 24.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1608232588WWMG0533<br>&nbsp;165235-193167</td><td>23.08.<br>23.08.</td><td><span class="fr">/J</span>KHANAL LOK<br>720 Self service<pre>Thank you bro fro your help during
football event. Cheers!!!
FI8616523500193167                 
NDEAFIHHXXX                        </pre></td><td class="xr">21</td><td class="xr">25,00-</td></tr>
<tr><td></td><td></td><td class="xb">24.08.2016 Balance</td><td></td><td class="xb">546,11+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>25,00-</td></tr>
<tr><td><b>Entry date 29.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1608282588NGP51380<br>&nbsp;</td><td>28.08.<br>28.08.</td><td><span class="fr">/J</span>SHRESTHA JUNU<br>705 Reference Payment<br>Reference 1067</td><td class="xr">22</td><td class="xr">6,00+</td></tr>
<tr><td></td><td></td><td class="xb">29.08.2016 Balance</td><td></td><td class="xb">552,11+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">6,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 30.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1608302588NGR90842<br>&nbsp;</td><td>30.08.<br>30.08.</td><td><span class="fr">/J</span>KAFLE ASTHA<br>705 Reference Payment<br>Reference 1067</td><td class="xr">23</td><td class="xr">6,00+</td></tr>
<tr><td><span class="fr">A </span>1608302588NGNQ2104<br>&nbsp;</td><td>30.08.<br>30.08.</td><td><span class="fr">/J</span>MAHAT SANDHYA<br>705 Reference Payment<br>Reference 1067</td><td class="xr">24</td><td class="xr">24,00+</td></tr>
<tr><td></td><td></td><td class="xb">30.08.2016 Balance</td><td></td><td class="xb">582,11+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">30,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 31.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1608302588NGRQ2977<br>&nbsp;</td><td>30.08.<br>30.08.</td><td><span class="fr">/J</span>NEUPANE DEEPA<br>705 Reference Payment<br>Reference 1067</td><td class="xr">25</td><td class="xr">6,00+</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.08.2016_008_5" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.08.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;5<br>Period<br>01.08.2016 - 31.08.2016</span><b>008 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">A </span>1608312588NGMG2946<br>&nbsp;</td><td>31.08.<br>31.08.</td><td><span class="fr">/J</span>BAIDHYA ELMITA<br>705 Reference Payment<br>Reference 1067</td><td class="xr">26</td><td class="xr">6,00+</td></tr>
<tr><td></td><td></td><td class="xb">31.08.2016 Balance<br>Available balance</td><td></td><td class="xb">594,11+<br>594,11+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">12,00+<br>0,00+</td></tr>
<tr><td></td><td></td><td><span class="fr">8<br>18</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">333,00+<br>1.048,62-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">333,00+<br>1.048,62-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">1.600,99+<br>1.734,04-</td></tr>

<tr><td><div style="height: 147mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.09.2016_009_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>30.09.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.09.2016 - 30.09.2016</span><b>009 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">31.08.2016 Balance</td><td></td><td class="xb">594,11+</td></tr>
<tr><td><b>Entry date 01.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1608312588NGP64572<br>&nbsp;</td><td>31.08.<br>31.08.</td><td><span class="fr">/J</span>KANTH RAJEEV KUMAR<br>705 Reference Payment<br>Reference 1067</td><td class="xr">1</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1609012588NGNF0222<br>&nbsp;</td><td>01.09.<br>01.09.</td><td><span class="fr">/J</span>TIWARI A. OR BANJARA TORANTA K<br>705 Reference Payment<br>Reference 1067</td><td class="xr">2</td><td class="xr">12,00+</td></tr>
<tr><td></td><td></td><td class="xb">01.09.2016 Balance</td><td></td><td class="xb">618,11+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">24,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 02.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1609022588NGM70697<br>&nbsp;</td><td>02.09.<br>02.09.</td><td><span class="fr">/J</span>SHARMA RANJIT KUMAR<br>705 Reference Payment<br>Reference 1067</td><td class="xr">3</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1609022588NGRQ3165<br>&nbsp;</td><td>02.09.<br>02.09.</td><td><span class="fr">/J</span>TAMANG LAMA RAKESH<br>705 Reference Payment<br>Reference 1067</td><td class="xr">4</td><td class="xr">12,00+</td></tr>
<tr><td></td><td></td><td class="xb">02.09.2016 Balance</td><td></td><td class="xb">642,11+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">24,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 05.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1609022588NGP64052<br>&nbsp;</td><td>02.09.<br>02.09.</td><td><span class="fr">/J</span>KARKI SUDHIR<br>705 Reference Payment<br>Reference 1067</td><td class="xr">5</td><td class="xr">6,00+</td></tr>
<tr><td><span class="fr">A </span>1609032588NGP30489<br>&nbsp;</td><td>03.09.<br>03.09.</td><td><span class="fr">/J</span>SHRESTHA SANJOG RAJ<br>705 Reference Payment<br>Reference 1067</td><td class="xr">6</td><td class="xr">6,00+</td></tr>
<tr><td><span class="fr">JE</span>160905258883E70600<br>&nbsp;</td><td>05.09.<br>05.09.</td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>01.08.-31.08.2016</pre></td><td class="xr">7</td><td class="xr">11,08-</td></tr>
<tr><td><span class="fr">J </span>160905258883E70600<br>&nbsp;</td><td>05.09.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,770 e       0,77
*) vat reg. 0%</pre></td><td class="xr">7</td><td>0,77-</td></tr>
<tr><td><span class="fr">J </span>160905258883E70600<br>&nbsp;</td><td>05.09.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Branch office services
174330-15861
Payments without a reference     *)
      2     a    0,550 e       1,10
Payments with a reference        *)
      6     a    0,130 e       0,78
*) vat reg. 0%</pre></td><td class="xr">7</td><td>1,88-</td></tr>

<tr><td><div style="height: 012mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.09.2016_009_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>30.09.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.09.2016 - 30.09.2016</span><b>009 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">J </span>160905258883E70600<br>&nbsp;</td><td>05.09.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Corporate Netbank, payments
174330-15861
Net payments to Nordea           *)
      4     a    0,200 e       0,80
Net payments to other banks      *)
      1     a    0,200 e       0,20
*) vat reg. 0%</pre></td><td class="xr">7</td><td>1,00-</td></tr>
<tr><td><span class="fr">J </span>160905258883E70600<br>&nbsp;</td><td>05.09.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
     13     a    0,110 e       1,43
*) vat reg. 0%</pre></td><td class="xr">7</td><td>7,43-</td></tr>
<tr><td><span class="fr">A </span>160905258875JA6460<br>&nbsp;</td><td>05.09.<br>05.09.</td><td><span class="fr">/J</span>K CITYMARKET TURKU RAVATT<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  160903060342  </pre></td><td class="xr">8</td><td class="xr">37,15-</td></tr>
<tr><td><span class="fr">A </span>160905258875JA6461<br>&nbsp;</td><td>05.09.<br>05.09.</td><td><span class="fr">/J</span>K CITYMARKET TURKU RAVATT<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  160903060350  </pre></td><td class="xr">9</td><td class="xr">13,88-</td></tr>
<tr><td><span class="fr">A </span>160905258875IN8092<br>&nbsp;</td><td>05.09.<br>05.09.</td><td><span class="fr">/J</span>Amazon web services<br>721 Card purchase<pre>USD          18,92 aws.amazon.co
KURSSI: 1,0917
Card number 4920210011152034   
Business filing ref  160903000897  </pre></td><td class="xr">10</td><td class="xr">17,33-</td></tr>
<tr><td><span class="fr">A </span>160905258875JA6462<br>&nbsp;</td><td>05.09.<br>05.09.</td><td><span class="fr">/J</span>K CITYMARKET TURKU RAVATT<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  160903060354  </pre></td><td class="xr">11</td><td class="xr">0,62-</td></tr>
<tr><td><span class="fr">A </span>160905258875LT3974<br>&nbsp;</td><td>05.09.<br>05.09.</td><td><span class="fr">/J</span>DELI MARKET TURKU<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  160903160003  </pre></td><td class="xr">12</td><td class="xr">16,82-</td></tr>
<tr><td><span class="fr">A </span>160905258875LT4926<br>&nbsp;</td><td>05.09.<br>05.09.</td><td><span class="fr">/J</span>LIDL TURKU KESKUSTA MN257<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  160903824835  </pre></td><td class="xr">13</td><td class="xr">1,19-</td></tr>
<tr><td><span class="fr">A </span>1609052588NGRD0102<br>&nbsp;</td><td>05.09.<br>05.09.</td><td><span class="fr">/J</span>SHERPA NYIMA DORJE LAMA<br>710 Deposit<pre>Returning Deposite FC Gaule Tournam
ent</pre></td><td class="xr">14</td><td class="xr">50,00+</td></tr>
<tr><td></td><td></td><td class="xb">05.09.2016 Balance</td><td></td><td class="xb">606,04+</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.09.2016_009_3" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>30.09.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;3<br>Period<br>01.09.2016 - 30.09.2016</span><b>009 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td></td><td></td><td><span class="fr">3<br>7</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">62,00+<br>98,07-</td></tr>
<tr><td><b>Entry date 26.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1609242588NGPU0868<br>&nbsp;</td><td>24.09.<br>24.09.</td><td><span class="fr">/J</span>SHAH MAHAMAD QAIUM<br>705 Reference Payment<br>Reference 1009</td><td class="xr">15</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>1609242588NGPB1418<br>&nbsp;</td><td>24.09.<br>24.09.</td><td><span class="fr">/J</span>YADAV AMAN<br>705 Reference Payment<br>Reference 1009</td><td class="xr">16</td><td class="xr">15,00+</td></tr>
<tr><td></td><td></td><td class="xb">26.09.2016 Balance</td><td></td><td class="xb">651,04+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">45,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 29.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1609282588NGRL2917<br>&nbsp;</td><td>28.09.<br>28.09.</td><td><span class="fr">/J</span>LINGDEN GANGA DHWAJ<br>705 Reference Payment<br>Reference 1009</td><td class="xr">17</td><td class="xr">15,00+</td></tr>
<tr><td></td><td></td><td class="xb">29.09.2016 Balance</td><td></td><td class="xb">666,04+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">15,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 30.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">  </span>SCTD4T15NRAHC1R<br>&nbsp;</td><td>29.09.<br>30.09.</td><td><span class="fr">/A</span>MAHAT HARI KRISHNA<br>710 Reference Payment<br>Reference 1009<pre>201609298E6855760222               
SCTD4T15NRAHC1R                    </pre></td><td class="xr">18</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>1609302588NGPJ2053<br>&nbsp;</td><td>30.09.<br>30.09.</td><td><span class="fr">/J</span>SITAULA KRISHNA<br>705 Reference Payment<br>Reference 1009</td><td class="xr">19</td><td class="xr">30,00+</td></tr>
<tr><td></td><td></td><td class="xb">30.09.2016 Balance<br>Available balance</td><td></td><td class="xb">726,04+<br>726,04+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">60,00+<br>0,00+</td></tr>
<tr><td></td><td></td><td><span class="fr">12<br>7</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">230,00+<br>98,07-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">230,00+<br>98,07-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">1.830,99+<br>1.832,11-</td></tr>

<tr><td><div style="height: 044mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.10.2016_010_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.10.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.10.2016 - 31.10.2016</span><b>010 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">30.09.2016 Balance</td><td></td><td class="xb">726,04+</td></tr>
<tr><td><b>Entry date 03.10.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1610012588NGML1238<br>&nbsp;</td><td>01.10.<br>01.10.</td><td><span class="fr">/J</span>POUDEL ANUP<br>705 Reference Payment<br>Reference 1009</td><td class="xr">1</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>1610012588NGRL1648<br>&nbsp;</td><td>01.10.<br>01.10.</td><td><span class="fr">/J</span>DHAKAL ANIL<br>705 Reference Payment<br>Reference 1009</td><td class="xr">2</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610012588NGPA2343<br>&nbsp;</td><td>01.10.<br>01.10.</td><td><span class="fr">/J</span>NIROULA SOBHAN<br>705 Reference Payment<br>Reference 1009</td><td class="xr">3</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610022588NGMG0010<br>&nbsp;</td><td>02.10.<br>02.10.</td><td><span class="fr">/J</span>TIWARI A. OR BANJARA TORANTA K<br>710 Deposit<pre>pay</pre></td><td class="xr">4</td><td class="xr">8,00+</td></tr>
<tr><td><span class="fr">A </span>1610032588NGNH5295<br>&nbsp;</td><td>03.10.<br>03.10.</td><td><span class="fr">/J</span>CHAND THAMAN BAHADUR<br>705 Reference Payment<br>Reference 1009</td><td class="xr">5</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610032588NGNF5554<br>&nbsp;</td><td>03.10.<br>03.10.</td><td><span class="fr">/J</span>SHRESTHA JUNU<br>705 Reference Payment<br>Reference 1009</td><td class="xr">6</td><td class="xr">15,00+</td></tr>
<tr><td></td><td></td><td class="xb">03.10.2016 Balance</td><td></td><td class="xb">824,04+</td></tr>
<tr><td></td><td></td><td><span class="fr">6<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">98,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 04.10.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">  </span>1610035934976M1656<br>&nbsp;</td><td>03.10.<br>04.10.</td><td><span class="fr">/A</span>ACHARYA BIBEK<br>710 Reference Payment<br>Reference 1009<pre>20161003MPAOKI-201610035934976M1656</pre></td><td class="xr">7</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">  </span>161003593497FL1606<br>&nbsp;</td><td>03.10.<br>04.10.</td><td><span class="fr">/A</span>THAPA KESHAV KUMAR<br>710 Reference Payment<br>Reference 1009<pre>20161003MPAOKI-20161003593497FL1606</pre></td><td class="xr">8</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>1610042588NGRU1114<br>&nbsp;</td><td>04.10.<br>04.10.</td><td><span class="fr">/J</span>SHRESTHA PRAMOJ PRAKASH<br>705 Reference Payment<br>Reference 1009</td><td class="xr">9</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>1610042588NGPL2071<br>&nbsp;</td><td>04.10.<br>04.10.</td><td><span class="fr">/J</span>LAMA PRABIN<br>705 Reference Payment<br>Reference 1009</td><td class="xr">10</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610042588NGNT3232<br>&nbsp;</td><td>04.10.<br>04.10.</td><td><span class="fr">/J</span>DEWAN DEEPLY<br>705 Reference Payment<br>Reference 1009</td><td class="xr">11</td><td class="xr">40,00+</td></tr>
<tr><td></td><td></td><td class="xb">04.10.2016 Balance</td><td></td><td class="xb">954,04+</td></tr>
<tr><td></td><td></td><td><span class="fr">5<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">130,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 05.10.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1610042588NGRV3998<br>&nbsp;</td><td>04.10.<br>04.10.</td><td><span class="fr">/J</span>KANTH RAJEEV KUMAR<br>705 Reference Payment<br>Reference 1009</td><td class="xr">12</td><td class="xr">40,00+</td></tr>

<tr><td><div style="height: 005mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.10.2016_010_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.10.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.10.2016 - 31.10.2016</span><b>010 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">A </span>1610042588NGN34244<br>&nbsp;</td><td>04.10.<br>04.10.</td><td><span class="fr">/J</span>GURUNG SANJIB<br>705 Reference Payment<br>Reference 1009</td><td class="xr">13</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>161005258875CI8079<br>&nbsp;</td><td>05.10.<br>05.10.</td><td><span class="fr">/J</span>Amazon web services<br>721 Card purchase<pre>USD           5,72 aws.amazon.co
KURSSI: 1,0958
Card number 4920210011152034   
Business filing ref  161003000217  </pre></td><td class="xr">14</td><td class="xr">5,22-</td></tr>
<tr><td><span class="fr">JE</span>161005258883E71012<br>&nbsp;</td><td>05.10.<br>05.10.</td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>01.09.-30.09.2016</pre></td><td class="xr">15</td><td class="xr">17,51-</td></tr>
<tr><td><span class="fr">J </span>161005258883E71012<br>&nbsp;</td><td>05.10.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,770 e       0,77
*) vat reg. 0%</pre></td><td class="xr">15</td><td>0,77-</td></tr>
<tr><td><span class="fr">J </span>161005258883E71012<br>&nbsp;</td><td>05.10.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Branch office services
174330-15861
Payments without a reference     *)
      1     a    0,550 e       0,55
Payments with a reference        *)
     11     a    0,130 e       1,43
*) vat reg. 0%</pre></td><td class="xr">15</td><td>1,98-</td></tr>
<tr><td><span class="fr">J </span>161005258883E71012<br>&nbsp;</td><td>05.10.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
     16     a    0,110 e       1,76
E-balance statement              *)
      1     a    7,000 e       7,00
*) vat reg. 0%</pre></td><td class="xr">15</td><td>14,76-</td></tr>
<tr><td><span class="fr">A </span>1610052588NGMR1630<br>&nbsp;</td><td>05.10.<br>05.10.</td><td><span class="fr">/J</span>POKHREL NARAYAN PRASAD<br>705 Reference Payment<br>Reference 1009</td><td class="xr">16</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610052588NGMA1722<br>&nbsp;</td><td>05.10.<br>05.10.</td><td><span class="fr">/J</span>PAUDEL RAJU<br>705 Reference Payment<br>Reference 1009</td><td class="xr">17</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610052588NGMS2724<br>&nbsp;</td><td>05.10.<br>05.10.</td><td><span class="fr">/J</span>SHARMA RANJIT KUMAR<br>705 Reference Payment<br>Reference 1009</td><td class="xr">18</td><td class="xr">40,00+</td></tr>
<tr><td><span class="fr">A </span>1610052588NGN72803<br>&nbsp;</td><td>05.10.<br>05.10.</td><td><span class="fr">/J</span>MAHAT SANDHYA<br>705 Reference Payment<br>Reference 1009</td><td class="xr">19</td><td class="xr">30,00+</td></tr>

<tr><td><div style="height: 010mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.10.2016_010_3" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.10.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;3<br>Period<br>01.10.2016 - 31.10.2016</span><b>010 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">A </span>1610052588NGRU3034<br>&nbsp;</td><td>05.10.<br>05.10.</td><td><span class="fr">/J</span>CHAUDHARY RUPESH<br>705 Reference Payment<br>Reference 1009</td><td class="xr">20</td><td class="xr">15,00+</td></tr>
<tr><td></td><td></td><td class="xb">05.10.2016 Balance</td><td></td><td class="xb">1.101,31+</td></tr>
<tr><td></td><td></td><td><span class="fr">7<br>2</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">170,00+<br>22,73-</td></tr>
<tr><td><b>Entry date 06.10.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1610052588NGM23861<br>&nbsp;</td><td>05.10.<br>05.10.</td><td><span class="fr">/J</span>POUDEL MANABI<br>705 Reference Payment<br>Reference 1009</td><td class="xr">21</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGMD0020<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>LIMBU PRAJIL<br>705 Reference Payment<br>Reference 1009</td><td class="xr">22</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">  </span>1610055937313N1235<br>&nbsp;</td><td>05.10.<br>06.10.</td><td><span class="fr">/A</span>LEHTONEN ANNA ELINA ADONIKA<br>710 Reference Payment<br>Reference 1009<pre>20161005MPAOKI-201610055937313N1235</pre></td><td class="xr">23</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGME0400<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>KARKI RAMESH<br>705 Reference Payment<br>Reference 1009</td><td class="xr">24</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGNT0555<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>THAPA SUNIL<br>705 Reference Payment<br>Reference 1009</td><td class="xr">25</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGML1075<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>GHIMIRE ARATI<br>705 Reference Payment<br>Reference 1009</td><td class="xr">26</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGP41156<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>NEUPANE PRADIP<br>705 Reference Payment<br>Reference 1009</td><td class="xr">27</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGNU1323<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>SHERPA PASANG<br>705 Reference Payment<br>Reference 1009</td><td class="xr">28</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGP41528<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>KAPRI YAKUB<br>705 Reference Payment<br>Reference 1009</td><td class="xr">29</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGRH1475<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>BHATTARAI PRAKASH<br>705 Reference Payment<br>Reference 1009</td><td class="xr">30</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGPT1532<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>BHATTARAI PRAKASH<br>710 Deposit<pre>B2</pre></td><td class="xr">31</td><td class="xr">10,00+</td></tr>
<tr><td></td><td></td><td class="xb">06.10.2016 Balance</td><td></td><td class="xb">1.321,31+</td></tr>
<tr><td></td><td></td><td><span class="fr">11<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">220,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 07.10.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1610062588NGN53062<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>ARYAL SUMAN<br>705 Reference Payment<br>Reference 1009</td><td class="xr">32</td><td class="xr">30,00+</td></tr>

<tr><td><div style="height: 006mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.10.2016_010_4" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.10.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;4<br>Period<br>01.10.2016 - 31.10.2016</span><b>010 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">A </span>1610062588NGM82919<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>SHRESTHA SABNAM<br>705 Reference Payment<br>Reference 1009</td><td class="xr">33</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGN12989<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>SHRESTHA SANJOG RAJ<br>710 Deposit<pre>Dashain party</pre></td><td class="xr">34</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGM53023<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>POKHAREL SUJAN<br>705 Reference Payment<br>Reference 1009</td><td class="xr">35</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGMU2650<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>THAPA GAURAV<br>710 Deposit<pre>payment for dashain party</pre></td><td class="xr">36</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGPD3005<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>BUI DANG THAO VY<br>705 Reference Payment<br>Reference 1009</td><td class="xr">37</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>1610062588NGRB2756<br>&nbsp;</td><td>06.10.<br>06.10.</td><td><span class="fr">/J</span>BARAL PURNA<br>705 Reference Payment<br>Reference 1009</td><td class="xr">38</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">  </span>SCTE4V9M4OFRA1B<br>&nbsp;</td><td>06.10.<br>07.10.</td><td><span class="fr">/A</span>MAHAT HARI KRISHNA<br>710 Reference Payment<br>Reference 1009<pre>201610068E6881192686               
SCTE4V9M4OFRA1B                    </pre></td><td class="xr">39</td><td class="xr">45,00+</td></tr>
<tr><td><span class="fr">A </span>1610072588NGPP1683<br>&nbsp;</td><td>07.10.<br>07.10.</td><td><span class="fr">/J</span>SITAULA KRISHNA<br>705 Reference Payment<br>Reference 1009</td><td class="xr">40</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610072588NGMC1764<br>&nbsp;</td><td>07.10.<br>07.10.</td><td><span class="fr">/J</span>PANTA DEEPAK<br>710 Deposit<pre>For dashain party</pre></td><td class="xr">41</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610072588NGM31884<br>&nbsp;</td><td>07.10.<br>07.10.</td><td><span class="fr">/J</span>CHAUDHARY ABHINAY<br>705 Reference Payment<br>Reference 1009</td><td class="xr">42</td><td class="xr">15,00+</td></tr>
<tr><td></td><td></td><td class="xb">07.10.2016 Balance</td><td></td><td class="xb">1.561,31+</td></tr>
<tr><td></td><td></td><td><span class="fr">11<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">240,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 10.10.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1610092588NGMT0611<br>&nbsp;</td><td>09.10.<br>09.10.</td><td><span class="fr">/J</span>TAMANG SANDESH<br>705 Reference Payment<br>Reference 1009</td><td class="xr">43</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610092588NGPI1582<br>&nbsp;</td><td>09.10.<br>09.10.</td><td><span class="fr">/J</span>POUDEL AMRIT<br>710 Deposit<pre>Mero ra Dhruba dai ko</pre></td><td class="xr">44</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>1610092588NGN41682<br>&nbsp;</td><td>09.10.<br>09.10.</td><td><span class="fr">/J</span>THAPA SHOVIT<br>705 Reference Payment<br>Reference 1009</td><td class="xr">45</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">  </span>161007392900004304<br>&nbsp;</td><td>06.10.<br>10.10.</td><td><span class="fr">/A</span>HAMED AHMADINIA<br>710 Reference Payment<br>Reference 1009<pre>20161007392900004304               </pre></td><td class="xr">46</td><td class="xr">15,00+</td></tr>

<tr><td><div style="height: 005mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.10.2016_010_5" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.10.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;5<br>Period<br>01.10.2016 - 31.10.2016</span><b>010 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">A </span>1610102588NGMM0467<br>&nbsp;</td><td>10.10.<br>10.10.</td><td><span class="fr">/J</span>KARKI DIPENDRA<br>705 Reference Payment<br>Reference 1009</td><td class="xr">47</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>1610102588NGPI0774<br>&nbsp;</td><td>10.10.<br>10.10.</td><td><span class="fr">/J</span>SHRESTHA PRAGESH<br>705 Reference Payment<br>Reference 1009</td><td class="xr">48</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1610102588NGPV1002<br>&nbsp;</td><td>10.10.<br>10.10.</td><td><span class="fr">/J</span>PAUDEL SUNIL<br>705 Reference Payment<br>Reference 1009</td><td class="xr">49</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>161010090419135799<br>&nbsp;</td><td>10.10.<br>10.10.</td><td>720 ATM withdrawal/Otto.<pre>04191 HÄMEENKATU 5 TURKU
Card number 4920210011152034   
Business filing ref                </pre></td><td class="xr">50</td><td class="xr">600,00-</td></tr>
<tr><td><span class="fr">A </span>161010090439938763<br>&nbsp;</td><td>10.10.<br>10.10.</td><td>720 ATM withdrawal/Otto.<pre>04399 EERIKINKATU 2 TURKU
Card number 4920210011152034   
Business filing ref                </pre></td><td class="xr">51</td><td class="xr">100,00-</td></tr>
<tr><td><span class="fr">A </span>1610102588NGM81965<br>&nbsp;</td><td>10.10.<br>10.10.</td><td><span class="fr">/J</span>KHANAL LOK<br>710 Deposit<pre>B6</pre></td><td class="xr">52</td><td class="xr">30,00+</td></tr>
<tr><td></td><td></td><td class="xb">10.10.2016 Balance</td><td></td><td class="xb">1.041,31+</td></tr>
<tr><td></td><td></td><td><span class="fr">8<br>2</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">180,00+<br>700,00-</td></tr>
<tr><td><b>Entry date 11.10.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">  </span>161007430924IB4087<br>&nbsp;</td><td>07.10.<br>11.10.</td><td><span class="fr">/A</span>HYNNINEN MIKAEL MATIAS<br>710 Reference Payment<br>Reference 1009<pre>20161007430924IB4087               </pre></td><td class="xr">53</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">A </span>161011258875DO6099<br>&nbsp;</td><td>11.10.<br>11.10.</td><td><span class="fr">/J</span>Turun Kansallinen Kirjaka<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  161010060798  </pre></td><td class="xr">54</td><td class="xr">5,00-</td></tr>
<tr><td></td><td></td><td class="xb">11.10.2016 Balance</td><td></td><td class="xb">1.066,31+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">30,00+<br>5,00-</td></tr>
<tr><td><b>Entry date 12.10.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1610112588NGMF2602<br>&nbsp;</td><td>11.10.<br>11.10.</td><td><span class="fr">/J</span>THAPA SUNIL<br>710 Deposit<pre>beer 6</pre></td><td class="xr">55</td><td class="xr">15,00+</td></tr>
<tr><td></td><td></td><td class="xb">12.10.2016 Balance</td><td></td><td class="xb">1.081,31+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">15,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 14.10.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1610132588NGPD2623<br>&nbsp;</td><td>13.10.<br>13.10.</td><td><span class="fr">/J</span>PAHADI SANDEEP<br>710 Deposit<pre>movieko payment.</pre></td><td class="xr">56</td><td class="xr">8,00+</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.10.2016_010_6" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäkonttori</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.10.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;6<br>Period<br>01.10.2016 - 31.10.2016</span><b>010 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">  </span>1610135937314Q1279<br>&nbsp;</td><td>13.10.<br>14.10.</td><td><span class="fr">/A</span>THAPA KESHAV KUMAR<br>710 Deposit<pre>Beer ko paiso
20161013MPAOKI-201610135937314Q1279</pre></td><td class="xr">57</td><td class="xr">5,00+</td></tr>
<tr><td></td><td></td><td class="xb">14.10.2016 Balance</td><td></td><td class="xb">1.094,31+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">13,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 31.10.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1610312588NGM73021<br>&nbsp;</td><td>31.10.<br>31.10.</td><td><span class="fr">/J</span>SHRESTHA PRAGESH<br>705 Reference Payment<br>Reference 1012</td><td class="xr">58</td><td class="xr">20,00+</td></tr>
<tr><td></td><td></td><td class="xb">31.10.2016 Balance<br>Available balance</td><td></td><td class="xb">1.114,31+<br>1.114,31+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">20,00+<br>0,00+</td></tr>
<tr><td></td><td></td><td><span class="fr">53<br>5</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">1.116,00+<br>727,73-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">1.116,00+<br>727,73-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">2.946,99+<br>2.559,84-</td></tr>

<tr><td><div style="height: 114mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.11.2016_011_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäyksikköi</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>30.11.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.11.2016 - 30.11.2016</span><b>011 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">31.10.2016 Balance</td><td></td><td class="xb">1.114,31+</td></tr>
<tr><td><b>Entry date 03.11.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>161103258883E70295<br>&nbsp;</td><td>03.11.<br>03.11.</td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>01.10.-31.10.2016</pre></td><td class="xr">1</td><td class="xr">23,28-</td></tr>
<tr><td><span class="fr">J </span>161103258883E70295<br>&nbsp;</td><td>03.11.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>161103258883E70295<br>&nbsp;</td><td>03.11.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Branch office services
174330-15861
Payments without a reference     *)
     10     a    0,550 e       5,50
Payments with a reference        *)
     43     a    0,130 e       5,59
*) vat reg. 0%</pre></td><td class="xr">1</td><td>11,09-</td></tr>
<tr><td><span class="fr">J </span>161103258883E70295<br>&nbsp;</td><td>03.11.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
     49     a    0,110 e       5,39
*) vat reg. 0%</pre></td><td class="xr">1</td><td>11,39-</td></tr>
<tr><td><span class="fr">  </span>161102593731II2803<br>&nbsp;</td><td>02.11.<br>03.11.</td><td><span class="fr">/A</span>THAPA KESHAV KUMAR<br>710 Reference Payment<br>Reference 1012<pre>20161102MPAOKI-20161102593731II2803</pre></td><td class="xr">2</td><td class="xr">20,00+</td></tr>
<tr><td></td><td></td><td class="xb">03.11.2016 Balance</td><td></td><td class="xb">1.111,03+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">20,00+<br>23,28-</td></tr>
<tr><td><b>Entry date 21.11.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1611212588NGRU0910<br>&nbsp;</td><td>21.11.<br>21.11.</td><td><span class="fr">/J</span>TAMANG SANDESH<br>705 Reference Payment<br>Reference 1012</td><td class="xr">3</td><td class="xr">20,00+</td></tr>
<tr><td></td><td></td><td class="xb">21.11.2016 Balance<br>Available balance</td><td></td><td class="xb">1.131,03+<br>1.131,03+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">20,00+<br>0,00+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>1</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">40,00+<br>23,28-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">40,00+<br>23,28-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">2.986,99+<br>2.583,12-</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.12.2016_012_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäyksikköi</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>30.12.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.12.2016 - 31.12.2016</span><b>012 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">30.11.2016 Balance</td><td></td><td class="xb">1.131,03+</td></tr>
<tr><td><b>Entry date 05.12.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>161205258883E70651<br>&nbsp;</td><td>05.12.<br>05.12.</td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>01.11.-30.11.2016</pre></td><td class="xr">1</td><td class="xr">7,06-</td></tr>
<tr><td><span class="fr">J </span>161205258883E70651<br>&nbsp;</td><td>05.12.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>161205258883E70651<br>&nbsp;</td><td>05.12.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Branch office services
174330-15861
Payments with a reference        *)
      2     a    0,130 e       0,26
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,26-</td></tr>
<tr><td><span class="fr">J </span>161205258883E70651<br>&nbsp;</td><td>05.12.<br></td><td><span class="fr">/J</span>NORDEA BANK FINLAND PLC<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
*) vat reg. 0%</pre></td><td class="xr">1</td><td>6,00-</td></tr>
<tr><td></td><td></td><td class="xb">05.12.2016 Balance</td><td></td><td class="xb">1.123,97+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>7,06-</td></tr>
<tr><td><b>Entry date 12.12.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1612102588WWNF0127<br>&nbsp;571690-246871</td><td>10.12.<br>10.12.</td><td><span class="fr">/A</span>Smartmobe Oy<br>720 Self service<pre>Dashain Venue Cost
FI4757169020046871                 
OKOYFIHHXXX                        </pre></td><td class="xr">2</td><td class="xr">450,00-</td></tr>
<tr><td><span class="fr">A </span>1612102588WWMI0124<br>&nbsp;820047-10775134</td><td>10.12.<br>10.12.</td><td><span class="fr">/A</span>HARI KRISHNA MAHAT<br>720 Self service<pre>Double pay, 22.8.2016, payed 65,
FI0482004710775134                 
DABAFIHHXXX                        </pre></td><td class="xr">3</td><td class="xr">37,00-</td></tr>
<tr><td><span class="fr">A </span>1612102588WWN80091<br>&nbsp;159035-432537</td><td>10.12.<br>10.12.</td><td><span class="fr">/J</span>YADAV AMAN<br>720 Self service<pre>DOMAIN REGISTRATION
FI7315903500432537                 
NDEAFIHHXXX                        </pre></td><td class="xr">4</td><td class="xr">12,00-</td></tr>
<tr><td><span class="fr">A </span>1612102588WWR50077<br>&nbsp;165235-191609</td><td>10.12.<br>10.12.</td><td><span class="fr">/J</span>KARKI SUDHIR<br>720 Self service<pre>PATENT REGISTRATION COST FOR NEW BO
ARD
FI5416523500191609                 
NDEAFIHHXXX                        </pre></td><td class="xr">5</td><td class="xr">20,00-</td></tr>

<tr><td><div style="height: 007mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.12.2016_012_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäyksikköi</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>30.12.2016</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.12.2016 - 31.12.2016</span><b>012 / 2016</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">A </span>1612102588WWP20133<br>&nbsp;165235-240521</td><td>10.12.<br>10.12.</td><td><span class="fr">/J</span>TAMANG LAMA RAKESH<br>720 Self service<pre>OLD SETTLEMENT, FORMER TNA BOARD
PROMISED FOR SETTLEMENT
FI8516523500240521                 
NDEAFIHHXXX                        </pre></td><td class="xr">6</td><td class="xr">100,00-</td></tr>
<tr><td><span class="fr">  </span>SCTE5F4ZPZJVD1B<br>&nbsp;</td><td>09.12.<br>12.12.</td><td><span class="fr">/A</span>MAHAT HARI KRISHNA<br>710 Deposit<pre>Dashain plus
201612098E7050894356               
SCTE5F4ZPZJVD1B                    </pre></td><td class="xr">7</td><td class="xr">276,00+</td></tr>
<tr><td></td><td></td><td class="xb">12.12.2016 Balance</td><td></td><td class="xb">780,97+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>5</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">276,00+<br>619,00-</td></tr>
<tr><td><b>Entry date 19.12.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1612162588NGNH3546<br>&nbsp;</td><td>16.12.<br>16.12.</td><td><span class="fr">/J</span>THAPA JITENDRA<br>705 Reference Payment<br>Reference 1012</td><td class="xr">8</td><td class="xr">40,00+</td></tr>
<tr><td></td><td></td><td class="xb">19.12.2016 Balance</td><td></td><td class="xb">820,97+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">40,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 20.12.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1612192588WWRL0617<br>&nbsp;571004-22032</td><td>19.12.<br>19.12.</td><td><span class="fr">/J</span>TURUN KAUPUNGIN KESKUSVIRASTO<br>720 Self service<pre>Payment for the footbal ground book
ing.
00000000000131689594
FI2657100420002032                 
OKOYFIHHXXX                        </pre></td><td class="xr">9</td><td class="xr">154,00-</td></tr>
<tr><td></td><td></td><td class="xb">20.12.2016 Balance</td><td></td><td class="xb">666,97+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>154,00-</td></tr>
<tr><td><b>Entry date 27.12.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1612242588NGNL0668<br>&nbsp;</td><td>24.12.<br>24.12.</td><td><span class="fr">/J</span>SITAULA KRISHNA<br>705 Reference Payment<br>Reference 1012</td><td class="xr">10</td><td class="xr">20,00+</td></tr>
<tr><td></td><td></td><td class="xb">27.12.2016 Balance<br>Available balance</td><td></td><td class="xb">686,97+<br>686,97+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">20,00+<br>0,00+</td></tr>
<tr><td></td><td></td><td><span class="fr">3<br>7</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">336,00+<br>780,06-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">336,00+<br>780,06-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">3.322,99+<br>3.363,18-</td></tr>

<tr><td><div style="height: 015mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.01.2017_001_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäyksikkö</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.01.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.01.2017 - 31.01.2017</span><b>001 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">30.12.2016 Balance</td><td></td><td class="xb">686,97+</td></tr>
<tr><td><b>Entry date 04.01.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>170104258883E70196<br>&nbsp;</td><td>04.01.<br>04.01.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.12.-31.12.2016</pre></td><td class="xr">1</td><td class="xr">8,81-</td></tr>
<tr><td><span class="fr">J </span>170104258883E70196<br>&nbsp;</td><td>04.01.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>170104258883E70196<br>&nbsp;</td><td>04.01.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Branch office services
174330-15861
Payments without a reference     *)
      1     a    0,550 e       0,55
Payments with a reference        *)
      2     a    0,130 e       0,26
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,81-</td></tr>
<tr><td><span class="fr">J </span>170104258883E70196<br>&nbsp;</td><td>04.01.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Corporate Netbank, payments
174330-15861
Net payments to Nordea           *)
      3     a    0,200 e       0,60
Net payments to other banks      *)
      3     a    0,200 e       0,60
*) vat reg. 0%</pre></td><td class="xr">1</td><td>1,20-</td></tr>
<tr><td><span class="fr">J </span>170104258883E70196<br>&nbsp;</td><td>04.01.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
*) vat reg. 0%</pre></td><td class="xr">1</td><td>6,00-</td></tr>
<tr><td></td><td></td><td class="xb">04.01.2017 Balance</td><td></td><td class="xb">678,16+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>8,81-</td></tr>
<tr><td><b>Entry date 31.01.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1701312588WWRQ0234<br>&nbsp;571004-22032</td><td>31.01.<br>31.01.</td><td><span class="fr">/J</span>TURUN KAUPUNGIN KESKUSVIRASTO<br>720 Self service<pre>13252355 laksu no.
00000000000132523552
FI2657100420002032                 
OKOYFIHHXXX                        </pre></td><td class="xr">2</td><td class="xr">136,00-</td></tr>
<tr><td></td><td></td><td class="xb">31.01.2017 Balance<br>Available balance</td><td></td><td class="xb">542,16+<br>542,16+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>136,00-</td></tr>

<tr><td><div style="height: 007mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.01.2017_001_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäyksikkö</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.01.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.01.2017 - 31.01.2017</span><b>001 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td></td><td></td><td><span class="fr">0<br>2</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">0,00+<br>144,81-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">0,00+<br>144,81-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">0,00+<br>144,81-</td></tr>

<tr><td><div style="height: 175mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.02.2017_002_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäyksikkö</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>28.02.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.02.2017 - 28.02.2017</span><b>002 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">31.01.2017 Balance</td><td></td><td class="xb">542,16+</td></tr>
<tr><td><b>Entry date 03.02.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>170203258883E67725<br>&nbsp;</td><td>03.02.<br>03.02.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.01.-31.01.2017</pre></td><td class="xr">1</td><td class="xr">7,33-</td></tr>
<tr><td><span class="fr">J </span>170203258883E67725<br>&nbsp;</td><td>03.02.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>170203258883E67725<br>&nbsp;</td><td>03.02.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Corporate Netbank, payments
174330-15861
Net payments to other banks      *)
      1     a    0,200 e       0,20
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,20-</td></tr>
<tr><td><span class="fr">J </span>170203258883E67725<br>&nbsp;</td><td>03.02.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      3     a    0,110 e       0,33
*) vat reg. 0%</pre></td><td class="xr">1</td><td>6,33-</td></tr>
<tr><td></td><td></td><td class="xb">03.02.2017 Balance<br>Available balance</td><td></td><td class="xb">534,83+<br>534,83+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>7,33-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">0,00+<br>7,33-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">0,00+<br>7,33-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">0,00+<br>152,14-</td></tr>

<tr><td><div style="height: 056mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.03.2017_003_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäyksikkö</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.03.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.03.2017 - 31.03.2017</span><b>003 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">28.02.2017 Balance</td><td></td><td class="xb">534,83+</td></tr>
<tr><td><b>Entry date 03.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>170303258883E66510<br>&nbsp;</td><td>03.03.<br>03.03.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.02.-28.02.2017</pre></td><td class="xr">1</td><td class="xr">7,02-</td></tr>
<tr><td><span class="fr">J </span>170303258883E66510<br>&nbsp;</td><td>03.03.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>170303258883E66510<br>&nbsp;</td><td>03.03.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      2     a    0,110 e       0,22
*) vat reg. 0%</pre></td><td class="xr">1</td><td>6,22-</td></tr>
<tr><td></td><td></td><td class="xb">03.03.2017 Balance</td><td></td><td class="xb">527,81+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>7,02-</td></tr>
<tr><td><b>Entry date 06.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1703052588NGPI1753<br>&nbsp;</td><td>05.03.<br>05.03.</td><td><span class="fr">/J</span>BASNET RUPESH<br>705 Reference Payment<br>Reference 1012</td><td class="xr">2</td><td class="xr">20,00+</td></tr>
<tr><td><span class="fr">A </span>1703052588NGND2429<br>&nbsp;</td><td>05.03.<br>05.03.</td><td><span class="fr">/J</span>LAMA PRABIN<br>705 Reference Payment<br>Reference 1012</td><td class="xr">3</td><td class="xr">20,00+</td></tr>
<tr><td><span class="fr">A </span>1703062588NGN60167<br>&nbsp;</td><td>06.03.<br>06.03.</td><td><span class="fr">/J</span>CHHETRI BHIM<br>705 Reference Payment<br>Reference 1012</td><td class="xr">4</td><td class="xr">20,00+</td></tr>
<tr><td></td><td></td><td class="xb">06.03.2017 Balance</td><td></td><td class="xb">587,81+</td></tr>
<tr><td></td><td></td><td><span class="fr">3<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">60,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 08.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">  </span>170307593497FT0714<br>&nbsp;</td><td>07.03.<br>08.03.</td><td><span class="fr">/A</span>PANDEY PRABIN<br>710 Reference Payment<br>Reference 1012<pre>20170307MPAOKI-20170307593497FT0714</pre></td><td class="xr">5</td><td class="xr">20,00+</td></tr>
<tr><td><span class="fr">  </span>170307593497U80471<br>&nbsp;</td><td>07.03.<br>08.03.</td><td><span class="fr">/A</span>JOSHI AJAYA<br>710 Reference Payment<br>Reference 1012<pre>20170307MPAOKI-20170307593497U80471</pre></td><td class="xr">6</td><td class="xr">20,00+</td></tr>
<tr><td></td><td></td><td class="xb">08.03.2017 Balance</td><td></td><td class="xb">627,81+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">40,00+<br>0,00+</td></tr>

<tr><td><div style="height: 008mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.03.2017_003_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäyksikkö</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.03.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.03.2017 - 31.03.2017</span><b>003 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><b>Entry date 09.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1703092588NGP41787<br>&nbsp;</td><td>09.03.<br>09.03.</td><td><span class="fr">/J</span>KHADKA RAPSON<br>705 Reference Payment<br>Reference 1012</td><td class="xr">7</td><td class="xr">20,00+</td></tr>
<tr><td></td><td></td><td class="xb">09.03.2017 Balance</td><td></td><td class="xb">647,81+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">20,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 10.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1703102588NGN40418<br>&nbsp;</td><td>10.03.<br>10.03.</td><td><span class="fr">/J</span>SUBEDI KISHOR<br>705 Reference Payment<br>Reference 1012</td><td class="xr">8</td><td class="xr">20,00+</td></tr>
<tr><td><span class="fr">A </span>1703102588NGMT0757<br>&nbsp;</td><td>10.03.<br>10.03.</td><td><span class="fr">/J</span>TAMANG LAMA RAKESH<br>705 Reference Payment<br>Reference 1012</td><td class="xr">9</td><td class="xr">20,00+</td></tr>
<tr><td></td><td></td><td class="xb">10.03.2017 Balance</td><td></td><td class="xb">687,81+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">40,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 13.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1703112588NGN10385<br>&nbsp;</td><td>11.03.<br>11.03.</td><td><span class="fr">/J</span>LINGDEN GANGA DHWAJ<br>705 Reference Payment<br>Reference 1012</td><td class="xr">10</td><td class="xr">20,00+</td></tr>
<tr><td><span class="fr">A </span>1703112588NGN20683<br>&nbsp;</td><td>11.03.<br>11.03.</td><td><span class="fr">/J</span>CHAND THAMAN BAHADUR<br>705 Reference Payment<br>Reference 1012</td><td class="xr">11</td><td class="xr">20,00+</td></tr>
<tr><td><span class="fr">  </span>SCTQ58FTE51WB1F<br>&nbsp;</td><td>10.03.<br>13.03.</td><td><span class="fr">/A</span>SUBEDI RAJAN<br>710 Reference Payment<br>Reference 1012<pre>201703108E7289930305               
Rajan Subedi                       
SCTQ58FTE51WB1F                    </pre></td><td class="xr">12</td><td class="xr">20,00+</td></tr>
<tr><td></td><td></td><td class="xb">13.03.2017 Balance</td><td></td><td class="xb">747,81+</td></tr>
<tr><td></td><td></td><td><span class="fr">3<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">60,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 27.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1703252588NGPU0747<br>&nbsp;</td><td>25.03.<br>25.03.</td><td><span class="fr">/J</span>GIRI KALYAN<br>705 Reference Payment<br>Reference 1012</td><td class="xr">13</td><td class="xr">20,00+</td></tr>
<tr><td><span class="fr">  </span>1703272584OC239439<br>&nbsp;</td><td>24.03.<br>27.03.</td><td><span class="fr">/A</span>THAPA KESHAV KUMAR<br>710 Reference Payment<br>Reference 1012<pre>NOTPROVIDED                        
20170324MPAOKI-20170324593497HF0736</pre></td><td class="xr">14</td><td class="xr">20,00+</td></tr>
<tr><td></td><td></td><td class="xb">27.03.2017 Balance<br>Available balance</td><td></td><td class="xb">787,81+<br>787,81+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">40,00+<br>0,00+</td></tr>
<tr><td></td><td></td><td><span class="fr">13<br>1</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">260,00+<br>7,02-</td></tr>

<tr><td><div style="height: 005mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.03.2017_003_3" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1743 Turun Yrittäjäyksikkö</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.03.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;3<br>Period<br>01.03.2017 - 31.03.2017</span><b>003 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">260,00+<br>7,02-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">260,00+<br>159,16-</td></tr>

<tr><td><div style="height: 183mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.04.2017_004_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>28.04.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.04.2017 - 30.04.2017</span><b>004 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">31.03.2017 Balance</td><td></td><td class="xb">787,81+</td></tr>
<tr><td><b>Entry date 05.04.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>170405258883E65691<br>&nbsp;</td><td>05.04.<br>05.04.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.03.-31.03.2017</pre></td><td class="xr">1</td><td class="xr">8,49-</td></tr>
<tr><td><span class="fr">J </span>170405258883E65691<br>&nbsp;</td><td>05.04.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>170405258883E65691<br>&nbsp;</td><td>05.04.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Branch office services
174330-15861
Payments with a reference        *)
     13     a    0,130 e       1,69
*) vat reg. 0%</pre></td><td class="xr">1</td><td>1,69-</td></tr>
<tr><td><span class="fr">J </span>170405258883E65691<br>&nbsp;</td><td>05.04.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
*) vat reg. 0%</pre></td><td class="xr">1</td><td>6,00-</td></tr>
<tr><td></td><td></td><td class="xb">05.04.2017 Balance</td><td></td><td class="xb">779,32+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>8,49-</td></tr>
<tr><td><b>Entry date 18.04.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>170418258875GZ1249<br>&nbsp;</td><td>18.04.<br>18.04.</td><td><span class="fr">/J</span>K SUPERMARKET ANNIKA<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  170414051001  </pre></td><td class="xr">2</td><td class="xr">1,15-</td></tr>
<tr><td><span class="fr">A </span>170418258875IX3814<br>&nbsp;</td><td>18.04.<br>18.04.</td><td><span class="fr">/J</span>TOKMANNI VARISSUO<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  170414810528  </pre></td><td class="xr">3</td><td class="xr">1,99-</td></tr>
<tr><td></td><td></td><td class="xb">18.04.2017 Balance</td><td></td><td class="xb">776,18+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>2</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>3,14-</td></tr>
<tr><td><b>Entry date 19.04.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1704182588NGP03371<br>&nbsp;</td><td>18.04.<br>18.04.</td><td><span class="fr">/J</span>KHADKA DHRUBA<br>705 Reference Payment<br>Reference 1012</td><td class="xr">4</td><td class="xr">20,00+</td></tr>
<tr><td></td><td></td><td class="xb">19.04.2017 Balance<br>Available balance</td><td></td><td class="xb">796,18+<br>796,18+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">20,00+<br>0,00+</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.04.2017_004_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>28.04.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.04.2017 - 30.04.2017</span><b>004 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td></td><td></td><td><span class="fr">1<br>3</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">20,00+<br>11,63-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">20,00+<br>11,63-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">280,00+<br>170,79-</td></tr>

<tr><td><div style="height: 175mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.05.2017_005_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.05.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.05.2017 - 31.05.2017</span><b>005 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">28.04.2017 Balance</td><td></td><td class="xb">796,18+</td></tr>
<tr><td><b>Entry date 04.05.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>170504258883E66420<br>&nbsp;</td><td>04.05.<br>04.05.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.04.-30.04.2017</pre></td><td class="xr">1</td><td class="xr">7,04-</td></tr>
<tr><td><span class="fr">J </span>170504258883E66420<br>&nbsp;</td><td>04.05.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>170504258883E66420<br>&nbsp;</td><td>04.05.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Branch office services
174330-15861
Payments with a reference        *)
      1     a    0,130 e       0,13
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,13-</td></tr>
<tr><td><span class="fr">J </span>170504258883E66420<br>&nbsp;</td><td>04.05.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      1     a    0,110 e       0,11
*) vat reg. 0%</pre></td><td class="xr">1</td><td>6,11-</td></tr>
<tr><td></td><td></td><td class="xb">04.05.2017 Balance<br>Available balance</td><td></td><td class="xb">789,14+<br>789,14+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>7,04-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">0,00+<br>7,04-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">0,00+<br>7,04-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">280,00+<br>177,83-</td></tr>

<tr><td><div style="height: 056mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.06.2017_006_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>30.06.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.06.2017 - 30.06.2017</span><b>006 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">31.05.2017 Balance</td><td></td><td class="xb">789,14+</td></tr>
<tr><td><b>Entry date 02.06.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>170602258875AU4834<br>&nbsp;</td><td>02.06.<br>02.06.</td><td><span class="fr">/J</span>OVH<br>721 Card purchase<pre>EUR          17,40 ROUBAIX
Card number 4920210011152034   
Business filing ref  170530171512  </pre></td><td class="xr">1</td><td class="xr">17,40-</td></tr>
<tr><td><span class="fr">A </span>170602258875AU4835<br>&nbsp;</td><td>02.06.<br>02.06.</td><td><span class="fr">/J</span>OVH<br>721 Card purchase<pre>EUR          12,40 ROUBAIX
Card number 4920210011152034   
Business filing ref  170530171512  </pre></td><td class="xr">2</td><td class="xr">12,40-</td></tr>
<tr><td></td><td></td><td class="xb">02.06.2017 Balance</td><td></td><td class="xb">759,34+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>2</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>29,80-</td></tr>
<tr><td><b>Entry date 05.06.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1706042588WWRG0163<br>&nbsp;571004-22032</td><td>04.06.<br>04.06.</td><td><span class="fr">/J</span>TURUN KAUPUNGIN KESKUSVIRASTO<br>720 Self service<pre>Laskunumero 13502802
00000000000135028025
FI2657100420002032                 
OKOYFIHHXXX                        </pre></td><td class="xr">3</td><td class="xr">419,93-</td></tr>
<tr><td><span class="fr">JE</span>170605258883E66588<br>&nbsp;</td><td>05.06.<br>05.06.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.05.-31.05.2017</pre></td><td class="xr">4</td><td class="xr">14,24-</td></tr>
<tr><td><span class="fr">J </span>170605258883E66588<br>&nbsp;</td><td>05.06.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">4</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>170605258883E66588<br>&nbsp;</td><td>05.06.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      4     a    0,110 e       0,44
E-balance statement              *)
      1     a    7,000 e       7,00
*) vat reg. 0%</pre></td><td class="xr">4</td><td>13,44-</td></tr>
<tr><td></td><td></td><td class="xb">05.06.2017 Balance</td><td></td><td class="xb">325,17+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>2</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>434,17-</td></tr>
<tr><td><b>Entry date 19.06.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>170619258875KF2117<br>&nbsp;</td><td>19.06.<br>19.06.</td><td><span class="fr">/J</span>K Rauta Skanssi<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  170618011425  </pre></td><td class="xr">5</td><td class="xr">3,95-</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.06.2017_006_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>30.06.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.06.2017 - 30.06.2017</span><b>006 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td></td><td></td><td class="xb">19.06.2017 Balance</td><td></td><td class="xb">321,22+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>3,95-</td></tr>
<tr><td><b>Entry date 20.06.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>170620258875BO8772<br>&nbsp;</td><td>20.06.<br>20.06.</td><td><span class="fr">/J</span>LIDL TURKU KESKUSTA MN257<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  170618717025  </pre></td><td class="xr">6</td><td class="xr">10,16-</td></tr>
<tr><td></td><td></td><td class="xb">20.06.2017 Balance<br>Available balance</td><td></td><td class="xb">311,06+<br>311,06+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>10,16-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>6</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">0,00+<br>478,08-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">0,00+<br>478,08-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">280,00+<br>655,91-</td></tr>

<tr><td><div style="height: 122mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.07.2017_007_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.07.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.07.2017 - 31.07.2017</span><b>007 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">30.06.2017 Balance</td><td></td><td class="xb">311,06+</td></tr>
<tr><td><b>Entry date 05.07.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>170705258883E66220<br>&nbsp;</td><td>05.07.<br>05.07.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.06.-30.06.2017</pre></td><td class="xr">1</td><td class="xr">7,55-</td></tr>
<tr><td><span class="fr">J </span>170705258883E66220<br>&nbsp;</td><td>05.07.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>170705258883E66220<br>&nbsp;</td><td>05.07.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Corporate Netbank, payments
174330-15861
Net payments to other banks      *)
      1     a    0,200 e       0,20
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,20-</td></tr>
<tr><td><span class="fr">J </span>170705258883E66220<br>&nbsp;</td><td>05.07.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      5     a    0,110 e       0,55
*) vat reg. 0%</pre></td><td class="xr">1</td><td>6,55-</td></tr>
<tr><td></td><td></td><td class="xb">05.07.2017 Balance<br>Available balance</td><td></td><td class="xb">303,51+<br>303,51+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>7,55-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">0,00+<br>7,55-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">0,00+<br>7,55-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">280,00+<br>663,46-</td></tr>

<tr><td><div style="height: 056mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.08.2017_008_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.08.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.08.2017 - 31.08.2017</span><b>008 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">31.07.2017 Balance</td><td></td><td class="xb">303,51+</td></tr>
<tr><td><b>Entry date 03.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>170803258883E64346<br>&nbsp;</td><td>03.08.<br>03.08.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.07.-31.07.2017</pre></td><td class="xr">1</td><td class="xr">7,02-</td></tr>
<tr><td><span class="fr">J </span>170803258883E64346<br>&nbsp;</td><td>03.08.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>170803258883E64346<br>&nbsp;</td><td>03.08.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      2     a    0,110 e       0,22
*) vat reg. 0%</pre></td><td class="xr">1</td><td>6,22-</td></tr>
<tr><td></td><td></td><td class="xb">03.08.2017 Balance</td><td></td><td class="xb">296,49+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>7,02-</td></tr>
<tr><td><b>Entry date 07.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1708062588NGN10893<br>&nbsp;</td><td>06.08.<br>06.08.</td><td><span class="fr">/J</span>YADAV AMAN<br>710 Deposit<pre>Membership Fee (Sharmila + Aman)</pre></td><td class="xr">2</td><td class="xr">24,00+</td></tr>
<tr><td><span class="fr">A </span>170807258875JY1936<br>&nbsp;</td><td>07.08.<br>07.08.</td><td><span class="fr">/J</span>K SUPERMARKET ANNIKA<br>721 Card purchase<pre>TURKU
Card number 4920210011152034   
Business filing ref  170806022562  </pre></td><td class="xr">3</td><td class="xr">5,98-</td></tr>
<tr><td></td><td></td><td class="xb">07.08.2017 Balance</td><td></td><td class="xb">314,51+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">24,00+<br>5,98-</td></tr>
<tr><td><b>Entry date 08.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">  </span>1708082584OC592754<br>&nbsp;</td><td>08.08.<br>08.08.</td><td><span class="fr">/J</span>MAHAT HARI KRISHNA<br>710 Deposit<pre>MembershipFee17
201708088E7696682615               
SCTZ7I29B0WBG1B                    </pre></td><td class="xr">4</td><td class="xr">12,00+</td></tr>
<tr><td></td><td></td><td class="xb">08.08.2017 Balance</td><td></td><td class="xb">326,51+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">12,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 11.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1708112588NGNN0054<br>&nbsp;</td><td>11.08.<br>11.08.</td><td><span class="fr">/J</span>TIWARI A. OR BANJARA TORANTA K<br>710 Deposit<pre>Teej17 (Message)</pre></td><td class="xr">5</td><td class="xr">16,00+</td></tr>

<tr><td><div style="height: 008mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.08.2017_008_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.08.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.08.2017 - 31.08.2017</span><b>008 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">A </span>1708112588NGNF0058<br>&nbsp;</td><td>11.08.<br>11.08.</td><td><span class="fr">/J</span>TIWARI A. OR BANJARA TORANTA K<br>710 Deposit<pre>MembershipFee17</pre></td><td class="xr">6</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1708112588NGPI0058<br>&nbsp;</td><td>11.08.<br>11.08.</td><td><span class="fr">/J</span>TIWARI A. OR BANJARA TORANTA K<br>710 Deposit<pre>suicide in Oulu</pre></td><td class="xr">7</td><td class="xr">15,00+</td></tr>
<tr><td></td><td></td><td class="xb">11.08.2017 Balance</td><td></td><td class="xb">369,51+</td></tr>
<tr><td></td><td></td><td><span class="fr">3<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">43,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 14.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1708122588NGPS0458<br>&nbsp;</td><td>12.08.<br>12.08.</td><td><span class="fr">/J</span>POUDEL ANUP<br>710 Deposit<pre>MembershipFee17</pre></td><td class="xr">8</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1708132588NGP90413<br>&nbsp;</td><td>13.08.<br>13.08.</td><td><span class="fr">/J</span>YADAV AMAN<br>710 Deposit<pre>Teej17</pre></td><td class="xr">9</td><td class="xr">16,00+</td></tr>
<tr><td><span class="fr">  </span>1708142584OC024204<br>&nbsp;</td><td>11.08.<br>14.08.</td><td><span class="fr">/J</span>SANJU K C<br>710 Deposit<pre>Teej17
NOTPROVIDED                        
20170811392900629279               </pre></td><td class="xr">10</td><td class="xr">16,00+</td></tr>
<tr><td><span class="fr">A </span>1708142588NGNA0562<br>&nbsp;</td><td>14.08.<br>14.08.</td><td><span class="fr">/J</span>DEVKOTA KARKI SRIJANA<br>710 Deposit<pre>Teej Celebration- 2017</pre></td><td class="xr">11</td><td class="xr">16,00+</td></tr>
<tr><td></td><td></td><td class="xb">14.08.2017 Balance</td><td></td><td class="xb">429,51+</td></tr>
<tr><td></td><td></td><td><span class="fr">4<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">60,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 15.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">  </span>1708152584OC087738<br>&nbsp;</td><td>14.08.<br>15.08.</td><td><span class="fr">/J</span>SUDHIR KARKI<br>710 Deposit<pre>Membership Fee- 2017
NOTPROVIDED                        
20170814392901379366               </pre></td><td class="xr">12</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">  </span>1708152584OC226215<br>&nbsp;</td><td>14.08.<br>15.08.</td><td><span class="fr">/J</span>LAMICHHANE SANTOSH<br>710 Deposit<pre>Teej17
NOTPROVIDED                        
20170814MPAOKI-20170814593731TB1240</pre></td><td class="xr">13</td><td class="xr">16,00+</td></tr>
<tr><td><span class="fr">A </span>1708152588WWNU0075<br>&nbsp;143935-174530</td><td>15.08.<br>15.08.</td><td><span class="fr">/J</span>TIWARI A. OR BANJARA TORANTA K<br>720 Self service<pre>Returned money of donation for case
 in oulu
FI6314393500174530                 
NDEAFIHHXXX                        </pre></td><td class="xr">14</td><td class="xr">15,00-</td></tr>
<tr><td><span class="fr">A </span>1708152588NGRF1800<br>&nbsp;</td><td>15.08.<br>15.08.</td><td><span class="fr">/J</span>K C KRISHNA<br>710 Deposit<pre>charity</pre></td><td class="xr">15</td><td class="xr">10,00+</td></tr>
<tr><td><span class="fr">A </span>1708152588NGN52580<br>&nbsp;</td><td>15.08.<br>15.08.</td><td><span class="fr">/J</span>NEPAL RITURAJ<br>710 Deposit<pre>Flood Victim Support</pre></td><td class="xr">16</td><td class="xr">50,00+</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.08.2017_008_3" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.08.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;3<br>Period<br>01.08.2017 - 31.08.2017</span><b>008 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td></td><td></td><td class="xb">15.08.2017 Balance</td><td></td><td class="xb">502,51+</td></tr>
<tr><td></td><td></td><td><span class="fr">4<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">88,00+<br>15,00-</td></tr>
<tr><td><b>Entry date 16.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1708152588NGPO5177<br>&nbsp;</td><td>15.08.<br>15.08.</td><td><span class="fr">/J</span>SHRESTHA PRAMOJ PRAKASH<br>710 Deposit<pre>MembershipFee17</pre></td><td class="xr">17</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1708152588NGMJ5346<br>&nbsp;</td><td>15.08.<br>15.08.</td><td><span class="fr">/J</span>PARAJULI KALPANA<br>710 Deposit<pre>Flood victim support</pre></td><td class="xr">18</td><td class="xr">25,00+</td></tr>
<tr><td><span class="fr">  </span>1708162584OC004679<br>&nbsp;</td><td>15.08.<br>16.08.</td><td><span class="fr">/J</span>PAHADI SITA<br>710 Deposit<pre>teej prog
201708158E7715029701               
SCTZ7LE4QKFFC1R                    </pre></td><td class="xr">19</td><td class="xr">8,00+</td></tr>
<tr><td><span class="fr">  </span>1708162584OC017040<br>&nbsp;</td><td>15.08.<br>16.08.</td><td><span class="fr">/J</span>AMAN YADAV<br>710 Deposit<pre>Flood victim support
NOTPROVIDED                        
20170815392900912496               </pre></td><td class="xr">20</td><td class="xr">25,00+</td></tr>
<tr><td><span class="fr">A </span>1708162588NGNL1644<br>&nbsp;</td><td>16.08.<br>16.08.</td><td><span class="fr">/J</span>TIWARI A. OR BANJARA TORANTA K<br>710 Deposit<pre>Flood Victim Donation</pre></td><td class="xr">21</td><td class="xr">25,00+</td></tr>
<tr><td><span class="fr">A </span>1708162588NGRA2371<br>&nbsp;</td><td>16.08.<br>16.08.</td><td><span class="fr">/J</span>NYAUPANE CHANDRA KANT<br>710 Deposit<pre>teej 17 ( arati ghimire )</pre></td><td class="xr">22</td><td class="xr">8,00+</td></tr>
<tr><td></td><td></td><td class="xb">16.08.2017 Balance</td><td></td><td class="xb">605,51+</td></tr>
<tr><td></td><td></td><td><span class="fr">6<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">103,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 17.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">  </span>1708172584OC116288<br>&nbsp;</td><td>16.08.<br>17.08.</td><td><span class="fr">/J</span>SUDHIR KARKI<br>710 Deposit<pre>Flood victim Support
NOTPROVIDED                        
20170816392900553003               </pre></td><td class="xr">23</td><td class="xr">30,00+</td></tr>
<tr><td><span class="fr">  </span>1708172584OC176146<br>&nbsp;</td><td>16.08.<br>17.08.</td><td><span class="fr">/J</span>KC SULOCHANA<br>710 Deposit<pre>Teej17
NOTPROVIDED                        
20170816OKI-20170816593497PP0732   </pre></td><td class="xr">24</td><td class="xr">8,00+</td></tr>
<tr><td><span class="fr">  </span>1708172584OC200203<br>&nbsp;</td><td>15.08.<br>17.08.</td><td><span class="fr">/J</span>MAHARJAN RESHA<br>710 Deposit<pre>Teej17
NOTPROVIDED                        
20170815MPAOKI-20170815593731BN4646</pre></td><td class="xr">25</td><td class="xr">8,00+</td></tr>
<tr><td></td><td></td><td class="xb">17.08.2017 Balance</td><td></td><td class="xb">651,51+</td></tr>
<tr><td></td><td></td><td><span class="fr">3<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">46,00+<br>0,00+</td></tr>

<tr><td><div style="height: 010mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.08.2017_008_4" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.08.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;4<br>Period<br>01.08.2017 - 31.08.2017</span><b>008 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><b>Entry date 18.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1708182588NGND1212<br>&nbsp;</td><td>18.08.<br>18.08.</td><td><span class="fr">/J</span>POUDEL ANUP<br>710 Deposit<pre>Flood victim support</pre></td><td class="xr">26</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1708182588NGR81788<br>&nbsp;</td><td>18.08.<br>18.08.</td><td><span class="fr">/J</span>MAHAT SANDHYA<br>710 Deposit<pre>Teej17 Sandhya Mahat</pre></td><td class="xr">27</td><td class="xr">8,00+</td></tr>
<tr><td></td><td></td><td class="xb">18.08.2017 Balance</td><td></td><td class="xb">674,51+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">23,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 21.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1708202588NGRM0874<br>&nbsp;</td><td>20.08.<br>20.08.</td><td><span class="fr">/J</span>SHRESTHA PRAMOJ PRAKASH<br>710 Deposit<pre>Flood victim support</pre></td><td class="xr">28</td><td class="xr">20,00+</td></tr>
<tr><td><span class="fr">A </span>1708202588NGM71429<br>&nbsp;</td><td>20.08.<br>20.08.</td><td><span class="fr">/J</span>MAHAT HARI KRISHNA<br>710 Deposit<pre>Flood victim support</pre></td><td class="xr">29</td><td class="xr">20,00+</td></tr>
<tr><td><span class="fr">A </span>1708202588WWMU0183<br>&nbsp;159035-432537</td><td>20.08.<br>20.08.</td><td><span class="fr">/J</span>YADAV AMAN<br>720 Self service<pre>Teej 2017 Check google drive for re
ceipt
FI7315903500432537                 
NDEAFIHHXXX                        </pre></td><td class="xr">30</td><td class="xr">109,77-</td></tr>
<tr><td><span class="fr">A </span>1708212588WWRG0001<br>&nbsp;165235-191609</td><td>21.08.<br>21.08.</td><td><span class="fr">/J</span>KARKI SUDHIR<br>720 Self service<pre>Rice cost in teej 2017
FI5416523500191609                 
NDEAFIHHXXX                        </pre></td><td class="xr">31</td><td class="xr">12,00-</td></tr>
<tr><td><span class="fr">A </span>1708212588WWRG0003<br>&nbsp;165235-191609</td><td>21.08.<br>21.08.</td><td><span class="fr">/J</span>KARKI SUDHIR<br>710 Self service corr<pre>Orig.filing code 1708212588WWRG0001
FI5416523500191609                 
NDEAFIHHXXX                        </pre></td><td class="xr">32</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">A </span>1708212588WWRJ0001<br>&nbsp;165235-191609</td><td>21.08.<br>21.08.</td><td><span class="fr">/J</span>KARKI SUDHIR<br>720 Self service<pre>Rice cost in teej 2017
FI5416523500191609                 
NDEAFIHHXXX                        </pre></td><td class="xr">33</td><td class="xr">12,00-</td></tr>
<tr><td><span class="fr">A </span>1708212588WWRJ0003<br>&nbsp;165235-191609</td><td>21.08.<br>21.08.</td><td><span class="fr">/J</span>KARKI SUDHIR<br>710 Self service corr<pre>Orig.filing code 1708212588WWRJ0001
FI5416523500191609                 
NDEAFIHHXXX                        </pre></td><td class="xr">34</td><td class="xr">12,00+</td></tr>
<tr><td><span class="fr">  </span>1708212584OC231538<br>&nbsp;</td><td>18.08.<br>21.08.</td><td><span class="fr">/J</span>SHARMA SITAULA PRATIKSHA<br>710 Deposit<pre>TEEJ 17
201708198E7724191314               
SCTC7MDPLE97G1F                    </pre></td><td class="xr">35</td><td class="xr">8,00+</td></tr>
<tr><td></td><td></td><td class="xb">21.08.2017 Balance</td><td></td><td class="xb">612,74+</td></tr>
<tr><td></td><td></td><td><span class="fr">5<br>3</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">72,00+<br>133,77-</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.08.2017_008_5" class="mypg_last"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.08.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;5<br>Period<br>01.08.2017 - 31.08.2017</span><b>008 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td></td><td></td><td><span class="fr">2<br>0</span>Credit reversals<br>Debit reversals</td><td></td><td class="xr">24,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 22.08.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1708212588WWNN0537<br>&nbsp;393900-54559083</td><td>21.08.<br>21.08.</td><td><span class="fr">/A</span>KARKI SUDHIR<br>720 Self service<pre>Rice cost in teej 2017
FI4639390054559083                 
SBANFIHHXXX                        </pre></td><td class="xr">36</td><td class="xr">12,00-</td></tr>
<tr><td><span class="fr">  </span>1708222584OC000906<br>&nbsp;</td><td>21.08.<br>22.08.</td><td><span class="fr">/J</span>LAMICHHANE SANTOSH<br>710 Deposit<pre>Flood victims
NOTPROVIDED                        
20170821MPAOKI-20170821593497CE2543</pre></td><td class="xr">37</td><td class="xr">10,00+</td></tr>
<tr><td><span class="fr">A </span>1708222588WWP90277<br>&nbsp;174530-86530</td><td>22.08.<br>22.08.</td><td><span class="fr">/J</span>NON-RESIDENT NEPALI ASSOCIATIO<br>720 Self service<pre>Flood Victims
FI6217453000086530                 
NDEAFIHHXXX                        </pre></td><td class="xr">38</td><td class="xr">230,00-</td></tr>
<tr><td></td><td></td><td class="xb">22.08.2017 Balance<br>Available balance</td><td></td><td class="xb">380,74+<br>380,74+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>2</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">10,00+<br>242,00-</td></tr>
<tr><td></td><td></td><td><span class="fr">30<br>8</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">481,00+<br>403,77-</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Credit reversal/period<br>Debit reversals/period</td><td></td><td class="xr">24,00+<br>0,00+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">457,00+<br>379,77-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">737,00+<br>1.043,23-</td></tr>

<tr><td><div style="height: 081mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div>
<div id="AS_174330-15861_01.09.2017_009_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>29.09.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.09.2017 - 30.09.2017</span><b>009 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">31.08.2017 Balance</td><td></td><td class="xb">380,74+</td></tr>
<tr><td><b>Entry date 01.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1708312588WWRF0535<br>&nbsp;800007-10102222</td><td>31.08.<br>31.08.</td><td><span class="fr">/A</span>OVH Hosting Oy<br>720 Self service<pre>PAYMENT FOR TNA VPS
00000000000757929670
FI1380000710102222                 
DABAFIHHXXX                        </pre></td><td class="xr">1</td><td class="xr">44,34-</td></tr>
<tr><td></td><td></td><td class="xb">01.09.2017 Balance</td><td></td><td class="xb">336,40+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>44,34-</td></tr>
<tr><td><b>Entry date 05.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>170905258883E64567<br>&nbsp;</td><td>05.09.<br>05.09.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.08.-31.08.2017</pre></td><td class="xr">2</td><td class="xr">149,55-</td></tr>
<tr><td><span class="fr">J </span>170905258883E64567<br>&nbsp;</td><td>05.09.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">2</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>170905258883E64567<br>&nbsp;</td><td>05.09.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Branch office services
174330-15861
Payments without a reference     *)
     28     a    0,550 e      15,40
*) vat reg. 0%</pre></td><td class="xr">2</td><td>15,40-</td></tr>
<tr><td><span class="fr">J </span>170905258883E64567<br>&nbsp;</td><td>05.09.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Corporate Netbank, payments
174330-15861
Net payments to Nordea           *)
      5     a    0,200 e       1,00
Net payments to other banks      *)
      1     a    0,200 e       0,20
*) vat reg. 0%</pre></td><td class="xr">2</td><td>1,20-</td></tr>
<tr><td><span class="fr">J </span>170905258883E64567<br>&nbsp;</td><td>05.09.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
     65     a    0,110 e       7,15
E-balance statement              *)
     17     a    7,000 e     119,00
*) vat reg. 0%</pre></td><td class="xr">2</td><td>132,15-</td></tr>
<tr><td></td><td></td><td class="xb">05.09.2017 Balance</td><td></td><td class="xb">186,85+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>149,55-</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.09.2017_009_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>29.09.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.09.2017 - 30.09.2017</span><b>009 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><b>Entry date 08.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1709082588NGMS1033<br>&nbsp;</td><td>08.09.<br>08.09.</td><td><span class="fr">/J</span>YADAV AMAN<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">3</td><td class="xr">34,00+</td></tr>
<tr><td></td><td></td><td class="xb">08.09.2017 Balance</td><td></td><td class="xb">220,85+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">34,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 11.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1709102588NGPH0797<br>&nbsp;</td><td>10.09.<br>10.09.</td><td><span class="fr">/J</span>LINGDEN GANGA DHWAJ<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">4</td><td class="xr">17,00+</td></tr>
<tr><td></td><td></td><td class="xb">11.09.2017 Balance</td><td></td><td class="xb">237,85+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">17,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 14.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">K </span>1709142360AA390174<br>&nbsp;</td><td>14.09.<br>14.09.</td><td><span class="fr">/J</span>Nordea Bank AB Finnish Branch<br>710 Account transfer<pre>Palvelumaksujen palautus
Returnering av serviceavgiften
Returning of service fee</pre></td><td class="xr">5</td><td class="xr">126,00+</td></tr>
<tr><td></td><td></td><td class="xb">14.09.2017 Balance</td><td></td><td class="xb">363,85+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">126,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 15.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1709142588NGRL2712<br>&nbsp;</td><td>14.09.<br>14.09.</td><td><span class="fr">/J</span>KANTH RAJEEV KUMAR<br>710 Deposit<pre>For Dashain Festival 2017 (Rajeev K
anth and Family)</pre></td><td class="xr">6</td><td class="xr">39,60+</td></tr>
<tr><td><span class="fr">A </span>1709142588NGNO2714<br>&nbsp;</td><td>14.09.<br>14.09.</td><td><span class="fr">/J</span>KANTH RAJEEV KUMAR<br>710 Deposit<pre>Membership Fee 2017-2018</pre></td><td class="xr">7</td><td class="xr">12,00+</td></tr>
<tr><td></td><td></td><td class="xb">15.09.2017 Balance</td><td></td><td class="xb">415,45+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">51,60+<br>0,00+</td></tr>
<tr><td><b>Entry date 20.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1709202588NGMJ0464<br>&nbsp;</td><td>20.09.<br>20.09.</td><td><span class="fr">/J</span>STINGACI VADIM<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">8</td><td class="xr">34,00+</td></tr>
<tr><td><span class="fr">A </span>1709202588NGN41333<br>&nbsp;</td><td>20.09.<br>20.09.</td><td><span class="fr">/J</span>SHRESTHA PRAMOJ PRAKASH<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">9</td><td class="xr">30,60+</td></tr>
<tr><td><span class="fr">  </span>1709202584OC370897<br>&nbsp;</td><td>20.09.<br>20.09.</td><td><span class="fr">/J</span>MAHAT HARI KRISHNA<br>710 Deposit<pre>Dashain17
201709208E7809537877               
SCTT7WFFH05MC1R                    </pre></td><td class="xr">10</td><td class="xr">61,20+</td></tr>
<tr><td><span class="fr">A </span>1709202588NGPU2450<br>&nbsp;</td><td>20.09.<br>20.09.</td><td><span class="fr">/J</span>LAUBE-POHTO RUBEN OSCAR<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">11</td><td class="xr">34,00+</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.09.2017_009_3" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>29.09.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;3<br>Period<br>01.09.2017 - 30.09.2017</span><b>009 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td></td><td></td><td class="xb">20.09.2017 Balance</td><td></td><td class="xb">575,25+</td></tr>
<tr><td></td><td></td><td><span class="fr">4<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">159,80+<br>0,00+</td></tr>
<tr><td><b>Entry date 21.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1709212588NGNN2004<br>&nbsp;</td><td>21.09.<br>21.09.</td><td><span class="fr">/J</span>MAHAT SANDHYA<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">12</td><td class="xr">34,00+</td></tr>
<tr><td></td><td></td><td class="xb">21.09.2017 Balance</td><td></td><td class="xb">609,25+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">34,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 22.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1709212588NGPO2525<br>&nbsp;</td><td>21.09.<br>21.09.</td><td><span class="fr">/J</span>POUDEL ANUP<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">13</td><td class="xr">30,60+</td></tr>
<tr><td><span class="fr">  </span>1709222584OC040599<br>&nbsp;</td><td>21.09.<br>22.09.</td><td><span class="fr">/J</span>KC SULOCHANA<br>710 Deposit<pre>Dashain17
NOTPROVIDED                        
20170921MPAOKI-20170921593731TO3182</pre></td><td class="xr">14</td><td class="xr">34,00+</td></tr>
<tr><td></td><td></td><td class="xb">22.09.2017 Balance</td><td></td><td class="xb">673,85+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">64,60+<br>0,00+</td></tr>
<tr><td><b>Entry date 25.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1709232588NGN80932<br>&nbsp;</td><td>23.09.<br>23.09.</td><td><span class="fr">/J</span>SHAH MAHAMAD QAIUM<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">15</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709232588NGM10392<br>&nbsp;</td><td>23.09.<br>23.09.</td><td><span class="fr">/J</span>NYAUPANE CHANDRA KANT<br>710 Deposit<pre>dashain 17... 1couple chandra and a
rati.</pre></td><td class="xr">16</td><td class="xr">34,00+</td></tr>
<tr><td><span class="fr">A </span>1709242588NGNU0284<br>&nbsp;</td><td>24.09.<br>24.09.</td><td><span class="fr">/J</span>DEWAN DEEPLY<br>710 Deposit<pre>Dashain 2017  happy Dashain to all</pre></td><td class="xr">17</td><td class="xr">27,00+</td></tr>
<tr><td><span class="fr">A </span>1709242588NGRR0454<br>&nbsp;</td><td>24.09.<br>24.09.</td><td><span class="fr">/J</span>SHRESTHA SANJOG RAJ<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">18</td><td class="xr">34,00+</td></tr>
<tr><td><span class="fr">A </span>1709242588NGNC0699<br>&nbsp;</td><td>24.09.<br>24.09.</td><td><span class="fr">/J</span>TAMANG SANDESH<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">19</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709252588NGRB0538<br>&nbsp;</td><td>25.09.<br>25.09.</td><td><span class="fr">/J</span>BAIDHYA ELMITA<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">20</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709252588NGNO0909<br>&nbsp;</td><td>25.09.<br>25.09.</td><td><span class="fr">/J</span>KAUR JASMINE<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">21</td><td class="xr">17,00+</td></tr>

<tr><td><div style="height: 017mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.09.2017_009_4" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>29.09.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;4<br>Period<br>01.09.2017 - 30.09.2017</span><b>009 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">  </span>1709252584OC360395<br>&nbsp;</td><td>25.09.<br>25.09.</td><td><span class="fr">/J</span>PAHADI SITA<br>710 Deposit<pre>Dashai prog
201709258E7819502226               
SCT07XZMES8NB1D                    </pre></td><td class="xr">22</td><td class="xr">42,00+</td></tr>
<tr><td><span class="fr">A </span>1709252588NGNT1423<br>&nbsp;</td><td>25.09.<br>25.09.</td><td><span class="fr">/J</span>PAHADI SANDEEP<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">23</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709252588NGN81700<br>&nbsp;</td><td>25.09.<br>25.09.</td><td><span class="fr">/J</span>KAPRI YAKUB<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">24</td><td class="xr">17,00+</td></tr>
<tr><td></td><td></td><td class="xb">25.09.2017 Balance</td><td></td><td class="xb">912,85+</td></tr>
<tr><td></td><td></td><td><span class="fr">10<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">239,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 26.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1709252588NGPF3175<br>&nbsp;</td><td>25.09.<br>25.09.</td><td><span class="fr">/J</span>LAMA PRABIN<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">25</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709252588NGRC3483<br>&nbsp;</td><td>25.09.<br>25.09.</td><td><span class="fr">/J</span>PAUDEL RAJU<br>710 Deposit<pre>dashain 17</pre></td><td class="xr">26</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709252588NGNQ3434<br>&nbsp;</td><td>25.09.<br>25.09.</td><td><span class="fr">/J</span>THAPA SHOVIT<br>710 Deposit<pre>Dasain17</pre></td><td class="xr">27</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709252588NGPR3395<br>&nbsp;</td><td>25.09.<br>25.09.</td><td><span class="fr">/J</span>BARAL PURNA<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">28</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709262588NGNJ0020<br>&nbsp;</td><td>26.09.<br>26.09.</td><td><span class="fr">/J</span>TANNERU TIRUMALA SRIDHAR BABU<br>710 Deposit<pre>Dashian 17 (Babu&amp;Sanita)</pre></td><td class="xr">29</td><td class="xr">34,00+</td></tr>
<tr><td><span class="fr">A </span>1709252588NGNR3367<br>&nbsp;</td><td>25.09.<br>25.09.</td><td><span class="fr">/J</span>DEVKOTA BINAY OR HOLM ANDREA<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">30</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">  </span>1709262584OC233459<br>&nbsp;</td><td>25.09.<br>26.09.</td><td><span class="fr">/J</span>ANUJ KHANAL<br>710 Deposit<pre>Dashain17
NOTPROVIDED                        
20170926392900001952               </pre></td><td class="xr">31</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">  </span>1709262584OC452534<br>&nbsp;</td><td>25.09.<br>26.09.</td><td><span class="fr">/J</span>LEHTONEN ANNA ELINA ADONIKA<br>710 Reference Payment<br>Reference 1009<pre>NOTPROVIDED                        
20170925MPAOKI-20170925593497PO1172</pre></td><td class="xr">32</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1709262588NGPK1121<br>&nbsp;</td><td>26.09.<br>26.09.</td><td><span class="fr">/J</span>PANTA DEEPAK<br>710 Deposit<pre>For dashain party</pre></td><td class="xr">33</td><td class="xr">15,00+</td></tr>
<tr><td><span class="fr">A </span>1709262588NGND1777<br>&nbsp;</td><td>26.09.<br>26.09.</td><td><span class="fr">/J</span>YADAV AMAN<br>710 Deposit<pre>Dashain payment for Jellene koho da
shain17</pre></td><td class="xr">34</td><td class="xr">34,00+</td></tr>


</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.09.2017_009_5" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>29.09.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;5<br>Period<br>01.09.2017 - 30.09.2017</span><b>009 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">A </span>1709262588NGMK1771<br>&nbsp;</td><td>26.09.<br>26.09.</td><td><span class="fr">/J</span>PANTA DEEPAK<br>710 Deposit<pre>For dashain party remaining 2 euros</pre></td><td class="xr">35</td><td class="xr">2,00+</td></tr>
<tr><td><span class="fr">A </span>1709262588NGMA1859<br>&nbsp;</td><td>26.09.<br>26.09.</td><td><span class="fr">/J</span>CHAUDHARY RUPESH<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">36</td><td class="xr">34,00+</td></tr>
<tr><td><span class="fr">A </span>1709262588NGNN2342<br>&nbsp;</td><td>26.09.<br>26.09.</td><td><span class="fr">/J</span>THAPA AJIT BAHADUR<br>710 Deposit<pre>payment for dashain event 2074.</pre></td><td class="xr">37</td><td class="xr">17,00+</td></tr>
<tr><td></td><td></td><td class="xb">26.09.2017 Balance</td><td></td><td class="xb">1.165,85+</td></tr>
<tr><td></td><td></td><td><span class="fr">13<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">253,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 27.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1709262588NGPC3002<br>&nbsp;</td><td>26.09.<br>26.09.</td><td><span class="fr">/J</span>TIWARI RAJ KUMAR<br>710 Deposit<pre> Dashain17</pre></td><td class="xr">38</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709262588NGMA3047<br>&nbsp;</td><td>26.09.<br>26.09.</td><td><span class="fr">/J</span>TIWARI RAJ KUMAR<br>710 Deposit<pre> Dashain17</pre></td><td class="xr">39</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709262588NGNQ3124<br>&nbsp;</td><td>26.09.<br>26.09.</td><td><span class="fr">/J</span>LIMBU PRAJIL<br>710 Deposit<pre>dasai17</pre></td><td class="xr">40</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709262588NGNH2974<br>&nbsp;</td><td>26.09.<br>26.09.</td><td><span class="fr">/J</span>MAHATO PRASHANT<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">41</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">  </span>1709272584OC049252<br>&nbsp;</td><td>26.09.<br>27.09.</td><td><span class="fr">/J</span>NACHAH ABDIREHMAN AYDID<br>710 Deposit<pre>Daahain 17
NOTPROVIDED                        
20170926392900445402               </pre></td><td class="xr">42</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">  </span>1709272584OC153005<br>&nbsp;</td><td>26.09.<br>27.09.</td><td><span class="fr">/J</span>SHARMA SITAULA PRATIKSHA<br>710 Deposit<pre>dashain 17
201709268E7823906347               
SCTZ7YC7GH0PH1R                    </pre></td><td class="xr">43</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709272588NGPH0066<br>&nbsp;</td><td>27.09.<br>27.09.</td><td><span class="fr">/J</span>POKHAREL SUJAN<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">44</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">  </span>1709272584OC332702<br>&nbsp;</td><td>27.09.<br>27.09.</td><td><span class="fr">/J</span>CHRISTIAN WEINBERGER<br>710 Deposit<pre>Dashain17
NOTPROVIDED                        
WELADE3LXXX-A6E26979157245l4       </pre></td><td class="xr">45</td><td class="xr">17,00+</td></tr>
<tr><td></td><td></td><td class="xb">27.09.2017 Balance</td><td></td><td class="xb">1.301,85+</td></tr>
<tr><td></td><td></td><td><span class="fr">8<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">136,00+<br>0,00+</td></tr>

<tr><td><div style="height: 017mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.09.2017_009_6" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>29.09.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;6<br>Period<br>01.09.2017 - 30.09.2017</span><b>009 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><b>Entry date 28.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">  </span>1709282584OC169475<br>&nbsp;</td><td>26.09.<br>28.09.</td><td><span class="fr">/J</span>LAMICHHANE SANTOSH<br>710 Deposit<pre>Dashain17
NOTPROVIDED                        
20170926MPAOKI-201709265937316C3914</pre></td><td class="xr">46</td><td class="xr">34,00+</td></tr>
<tr><td><span class="fr">  </span>1709282584OC267676<br>&nbsp;</td><td>28.09.<br>28.09.</td><td><span class="fr">/J</span>MAHAT HARI KRISHNA<br>710 Deposit<pre>Dashain17 Qaium+1
201709288E7828289366               
SCTK7YWCIO9QE1D                    </pre></td><td class="xr">47</td><td class="xr">17,00+</td></tr>
<tr><td></td><td></td><td class="xb">28.09.2017 Balance</td><td></td><td class="xb">1.352,85+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">51,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 29.09.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">  </span>1709292584OC286763<br>&nbsp;</td><td>27.09.<br>29.09.</td><td><span class="fr">/J</span>PANDEY PRABIN<br>710 Deposit<pre>Dashain17
NOTPROVIDED                        
20170927MPAOKI-201709275937312K3496</pre></td><td class="xr">48</td><td class="xr">17,00+</td></tr>
<tr><td></td><td></td><td class="xb">29.09.2017 Balance<br>Available balance</td><td></td><td class="xb">1.369,85+<br>1.369,85+</td></tr>
<tr><td></td><td></td><td><span class="fr">1<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">17,00+<br>0,00+</td></tr>
<tr><td></td><td></td><td><span class="fr">46<br>2</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">1.183,00+<br>193,89-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">1.183,00+<br>193,89-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">1.920,00+<br>1.237,12-</td></tr>

<tr><td><div style="height: 080mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.10.2017_010_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.10.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.10.2017 - 31.10.2017</span><b>010 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">29.09.2017 Balance</td><td></td><td class="xb">1.369,85+</td></tr>
<tr><td><b>Entry date 02.10.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1709302588NGM00314<br>&nbsp;</td><td>30.09.<br>30.09.</td><td><span class="fr">/J</span>CHHETRI BHIM<br>710 Deposit<pre>dashain fee</pre></td><td class="xr">1</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709302588NGNH1556<br>&nbsp;</td><td>30.09.<br>30.09.</td><td><span class="fr">/J</span>TIWARI A. OR BANJARA TORANTA K<br>710 Deposit<pre>Dashain 17_Ananda Tiwari</pre></td><td class="xr">2</td><td class="xr">17,00+</td></tr>
<tr><td><span class="fr">A </span>1709302588NGP22156<br>&nbsp;</td><td>30.09.<br>30.09.</td><td><span class="fr">/J</span>MAHARJAN AJAYA<br>710 Deposit<pre>Dashain17</pre></td><td class="xr">3</td><td class="xr">34,00+</td></tr>
<tr><td></td><td></td><td class="xb">02.10.2017 Balance</td><td></td><td class="xb">1.437,85+</td></tr>
<tr><td></td><td></td><td><span class="fr">3<br>0</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">68,00+<br>0,00+</td></tr>
<tr><td><b>Entry date 03.10.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">A </span>1710022588WWR50783<br>&nbsp;159035-432537</td><td>02.10.<br>02.10.</td><td><span class="fr">/J</span>YADAV AMAN<br>720 Self service<pre>docs.google.com/spreadsheets/d/
17FEPBKQdBuioEItSM8SdUv
_yzofaGcj3Mud3HcLarfI
/edit_gid=0
FI7315903500432537                 
NDEAFIHHXXX                        </pre></td><td class="xr">4</td><td class="xr">613,29-</td></tr>
<tr><td><span class="fr">  </span>1710032584OC102236<br>&nbsp;</td><td>01.10.<br>03.10.</td><td><span class="fr">/J</span>SUDHIR KARKI<br>710 Deposit<pre>DASHAIN 2074
NOTPROVIDED                        
20171002392901010958               </pre></td><td class="xr">5</td><td class="xr">15,30+</td></tr>
<tr><td><span class="fr">A </span>1710032588WWRK0206<br>&nbsp;571144-46055</td><td>03.10.<br>03.10.</td><td><span class="fr">/A</span>T-talon<br>720 Self service<pre>T-talon tilan vuokra 01.10.2017 (SB
K)
Lasku numero: 11104
00000000000000111041
FI6457114440006055                 
OKOYFIHHXXX                        </pre></td><td class="xr">6</td><td class="xr">490,00-</td></tr>
<tr><td><span class="fr">A </span>1710032588NGM62270<br>&nbsp;</td><td>03.10.<br>03.10.</td><td><span class="fr">/J</span>SHRESTHA PRAMOJ PRAKASH<br>710 Deposit<pre>Dashai</pre></td><td class="xr">7</td><td class="xr">9,00+</td></tr>
<tr><td></td><td></td><td class="xb">03.10.2017 Balance</td><td></td><td class="xb">358,86+</td></tr>
<tr><td></td><td></td><td><span class="fr">2<br>2</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">24,30+<br>1.103,29-</td></tr>
<tr><td><b>Entry date 04.10.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>171004258883E64770<br>&nbsp;</td><td>04.10.<br>04.10.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.09.-30.09.2017</pre></td><td class="xr">8</td><td class="xr">41,78-</td></tr>

<tr><td><div style="height: 018mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.10.2017_010_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.10.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.10.2017 - 31.10.2017</span><b>010 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>

<tr><td><span class="fr">J </span>171004258883E64770<br>&nbsp;</td><td>04.10.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">8</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>171004258883E64770<br>&nbsp;</td><td>04.10.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Branch office services
174330-15861
Payments without a reference     *)
     45     a    0,550 e      24,75
Payments with a reference        *)
      1     a    0,130 e       0,13
*) vat reg. 0%</pre></td><td class="xr">8</td><td>24,88-</td></tr>
<tr><td><span class="fr">J </span>171004258883E64770<br>&nbsp;</td><td>04.10.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Corporate Netbank, payments
174330-15861
Net payments to other banks      *)
      1     a    0,200 e       0,20
*) vat reg. 0%</pre></td><td class="xr">8</td><td>0,20-</td></tr>
<tr><td><span class="fr">J </span>171004258883E64770<br>&nbsp;</td><td>04.10.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
     90     a    0,110 e       9,90
*) vat reg. 0%</pre></td><td class="xr">8</td><td>15,90-</td></tr>
<tr><td></td><td></td><td class="xb">04.10.2017 Balance<br>Available balance</td><td></td><td class="xb">317,08+<br>317,08+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>41,78-</td></tr>
<tr><td></td><td></td><td><span class="fr">5<br>3</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">92,30+<br>1.145,07-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">92,30+<br>1.145,07-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">2.012,30+<br>2.382,19-</td></tr>

<tr><td><div style="height: 044mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.11.2017_011_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>30.11.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.11.2017 - 30.11.2017</span><b>011 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">31.10.2017 Balance</td><td></td><td class="xb">317,08+</td></tr>
<tr><td><b>Entry date 03.11.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>171103258883E66446<br>&nbsp;</td><td>03.11.<br>03.11.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.10.-31.10.2017</pre></td><td class="xr">1</td><td class="xr">11,93-</td></tr>
<tr><td><span class="fr">J </span>171103258883E66446<br>&nbsp;</td><td>03.11.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>171103258883E66446<br>&nbsp;</td><td>03.11.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Branch office services
174330-15861
Payments without a reference     *)
      5     a    0,550 e       2,75
*) vat reg. 0%</pre></td><td class="xr">1</td><td>2,75-</td></tr>
<tr><td><span class="fr">J </span>171103258883E66446<br>&nbsp;</td><td>03.11.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Corporate Netbank, payments
174330-15861
Net payments to Nordea           *)
      1     a    0,200 e       0,20
Net payments to other banks      *)
      1     a    0,200 e       0,20
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,40-</td></tr>
<tr><td><span class="fr">J </span>171103258883E66446<br>&nbsp;</td><td>03.11.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
     18     a    0,110 e       1,98
*) vat reg. 0%</pre></td><td class="xr">1</td><td>7,98-</td></tr>
<tr><td></td><td></td><td class="xb">03.11.2017 Balance<br>Available balance</td><td></td><td class="xb">305,15+<br>305,15+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>11,93-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">0,00+<br>11,93-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">0,00+<br>11,93-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">2.012,30+<br>2.394,12-</td></tr>

<tr><td><div style="height: 023mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.12.2017_012_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>29.12.2017</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.12.2017 - 31.12.2017</span><b>012 / 2017</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">30.11.2017 Balance</td><td></td><td class="xb">305,15+</td></tr>
<tr><td><b>Entry date 05.12.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>171205258883E64673<br>&nbsp;</td><td>05.12.<br>05.12.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.11.-30.11.2017</pre></td><td class="xr">1</td><td class="xr">7,24-</td></tr>
<tr><td><span class="fr">J </span>171205258883E64673<br>&nbsp;</td><td>05.12.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>171205258883E64673<br>&nbsp;</td><td>05.12.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      4     a    0,110 e       0,44
*) vat reg. 0%</pre></td><td class="xr">1</td><td>6,44-</td></tr>
<tr><td></td><td></td><td class="xb">05.12.2017 Balance<br>Available balance</td><td></td><td class="xb">297,91+<br>297,91+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>7,24-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">0,00+<br>7,24-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">0,00+<br>7,24-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">2.012,30+<br>2.401,36-</td></tr>

<tr><td><div style="height: 082mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.01.2018_001_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>31.01.2018</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.01.2018 - 31.01.2018</span><b>001 / 2018</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">29.12.2017 Balance</td><td></td><td class="xb">297,91+</td></tr>
<tr><td><b>Entry date 04.01.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>180104258883E65500<br>&nbsp;</td><td>04.01.<br>04.01.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.12.-31.12.2017</pre></td><td class="xr">1</td><td class="xr">7,02-</td></tr>
<tr><td><span class="fr">J </span>180104258883E65500<br>&nbsp;</td><td>04.01.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>180104258883E65500<br>&nbsp;</td><td>04.01.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      2     a    0,110 e       0,22
*) vat reg. 0%</pre></td><td class="xr">1</td><td>6,22-</td></tr>
<tr><td></td><td></td><td class="xb">04.01.2018 Balance<br>Available balance</td><td></td><td class="xb">290,89+<br>290,89+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>7,02-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">0,00+<br>7,02-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">0,00+<br>7,02-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">0,00+<br>7,02-</td></tr>

<tr><td><div style="height: 082mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.02.2018_002_1" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>28.02.2018</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.02.2018 - 28.02.2018</span><b>002 / 2018</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">31.01.2018 Balance</td><td></td><td class="xb">290,89+</td></tr>
<tr><td><b>Entry date 05.02.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>180205258883E64376<br>&nbsp;</td><td>05.02.<br>05.02.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.01.-31.01.2018</pre></td><td class="xr">1</td><td class="xr">7,13-</td></tr>
<tr><td><span class="fr">J </span>180205258883E64376<br>&nbsp;</td><td>05.02.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>180205258883E64376<br>&nbsp;</td><td>05.02.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      3     a    0,110 e       0,33
*) vat reg. 0%</pre></td><td class="xr">1</td><td>6,33-</td></tr>
<tr><td></td><td></td><td class="xb">05.02.2018 Balance<br>Available balance</td><td></td><td class="xb">283,76+<br>283,76+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>7,13-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">0,00+<br>7,13-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">0,00+<br>7,13-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">0,00+<br>14,15-</td></tr>

<tr><td><div style="height: 082mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.02.2018_000_2" class="mypg"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>28.02.2018</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;2<br>Period<br>01.02.2018 - 28.02.2018</span><b>000 / 2018</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main_t">

<div class="info">
	
<b>Current affairs</b>
<div class="info_d"><pre>The assets in the account fall within the scope of the Swedish deposit
guarantee scheme in accordance with the Swedish National Debt Office&#039;s
(Riksgälden) decision. Further information available at
www.nordea.fi/depositguarantee or at the banks branch offices.
</pre></div>

</div>

</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div><div class="no_prnt"></div>

<div id="AS_174330-15861_01.03.2018_003_1" class="mypg_last"><div class="pg_header">
<table cellspacing="0" cellpadding="2" width="100%"><col width="40%"><col width="25%"><col width="35%"><tbody>
<tr><td><img src="http://solo.nordea.fi/i2360not.gif" alt="Nordea"><br>1302 Nordea Business Centre</td><td><b>ACCOUNT STATEMENT</b><br>Date<br>29.03.2018</td><td><span class="frr">Page&nbsp;&nbsp;&nbsp;&nbsp;1<br>Period<br>01.03.2018 - 31.03.2018</span><b>003 / 2018</b></td></tr>
<tr><td>&nbsp;<br>TURKU NEPAL ASSOCIATION RY</td><td>Disposal account<br>174330-15861</td><td>Currency<br>EUR</td></tr>
<tr><td>&nbsp;</td><td>IBAN<br>FI65 1743 3000 0158 61</td><td><span class="frr">SWIFT/BIC<br>NDEAFIHH</span>


</td></tr>
</tbody></table></div><div class="pg_main">
<table border="1" cellspacing="0" cellpadding="2" width="100%"  height="100%" rules="groups">
<colgroup span="1" width="24%"><colgroup span="1" width="8%"><colgroup span="1" width="42%"><colgroup span="1" width="5%"><colgroup span="1" width="21%"><thead><tr><td>Filing code<br>Payee's account no</td><td>Pdate<br>Vdate</td><td>Payee / Payer<br>Message</td><td>Trans<br>no</td><td class="xr">Amount</td></tr></thead>
<tbody>
<tr><td></td><td></td><td class="xb">28.02.2018 Balance</td><td></td><td class="xb">283,76+</td></tr>
<tr><td><b>Entry date 05.03.</b></td><td></td><td></td><td></td><td></td></tr><tr><td><span class="fr">JE</span>180305258883E63299<br>&nbsp;</td><td>05.03.<br>05.03.</td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>01.02.-28.02.2018</pre></td><td class="xr">1</td><td class="xr">6,91-</td></tr>
<tr><td><span class="fr">J </span>180305258883E63299<br>&nbsp;</td><td>05.03.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Electronic account statement
174330-15861
Account statement, TITO          *)
      1     a    0,800 e       0,80
*) vat reg. 0%</pre></td><td class="xr">1</td><td>0,80-</td></tr>
<tr><td><span class="fr">J </span>180305258883E63299<br>&nbsp;</td><td>05.03.<br></td><td><span class="fr">/J</span>NORDEA<br>730 Service fee<pre>Netbank Agreement/corporation
Connection fee                   *)
      1     a    6,000 e       6,00
Transaction query                *)
      1     a    0,110 e       0,11
*) vat reg. 0%</pre></td><td class="xr">1</td><td>6,11-</td></tr>
<tr><td></td><td></td><td class="xb">05.03.2018 Balance<br>Available balance</td><td></td><td class="xb">276,85+<br>276,85+</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Total deposits<br>Total withdrawals</td><td></td><td class="xr">0,00+<br>6,91-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>1</span>Deposits/period<br>Withdrawals/period</td><td></td><td class="xr">0,00+<br>6,91-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/month<br>Withdrawals/month</td><td></td><td class="xr">0,00+<br>6,91-</td></tr>
<tr><td></td><td></td><td><span class="fr">0<br>0</span>Deposits/year<br>Withdrawals/year</td><td></td><td class="xr">0,00+<br>21,06-</td></tr>

<tr><td><div style="height: 082mm;">&nbsp;</div></td><td></td><td></td><td></td><td></td></tr>
</tbody>
</table>
</div><div class="pg_footer">Printed by customer<div class="footnote">Nordea Bank AB (publ), Finnish Branch, Satamaradankatu 5, FI-00020 NORDEA, Finland, Business Identity Code 1703218-0</div></div>
</div>
<!-- HTMKTO created: 03.09.2017 22:31:54 +3
     Logging id    : WW-CL702
     User id       : 0000000037090248
     User name     : TURKU NEPAL ASSOCI 
-->
`;
