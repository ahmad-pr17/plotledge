import type { Messages } from '@/i18n/messages'

const showcase: Messages['showcase'] = {
  /** Date layout: {day} {month} {year}. Month is the short month name from Intl. */
  dateFormat: '{day} {month} {year}',
  /** Month span in chart descriptions: January to July. */
  range: '{from} سے {to}',
  /** Joins items in screen-reader chart descriptions. */
  listSeparator: '، ',
  listSeparatorLong: '؛ ',
  /** A value already in millions: 3.12 -> '3.12 million'. */
  millionAmount: '{n} ملین',
  status: { paid: 'ادا شدہ', pending: 'زیر التوا', overdue: 'واجب الادا' },
  plotStatus: { available: 'دستیاب', booked: 'بک شدہ', sold: 'فروخت شدہ' },
  /** Plot sizes: Marla and Kanal are Pakistani land units. */
  sizes: { marla: '{n} مرلہ', kanal: '{n} کنال' },
  /** Sample customer names. */
  people: {
    ayesha: 'عائشہ خان',
    hamza: 'حمزہ قریشی',
    mehwish: 'مہوش احمد',
    bilal: 'بلال رضا',
    usman: 'عثمان طارق',
    rabia: 'رابعہ صدیقی',
    kamran: 'کامران جاوید',
    nimra: 'نمرہ اسلم',
  },
  dashboard: {
    eyebrow: 'آپ کا ڈیش بورڈ',
    title: 'جانیں کہ ہر روپیہ کہاں کھڑا ہے۔',
    description: 'کتنا آ چکا، کتنا ابھی واجب ہے، اور کون تاخیر کر رہا ہے۔ جواب پہلی ہی اسکرین پر ہے۔',
  },
  deal: {
    eyebrow: 'سودے کے اندر',
    title: 'ایک خریدار، ایک صفحہ، کچھ بھی غائب نہیں۔',
    description: 'پلاٹ کھولیں اور قیمت، ڈاؤن پیمنٹ، ہر قسط اور ہر رسید دیکھیں۔ چیٹس میں اسکرول کرنے کی ضرورت نہیں۔',
    summary: {
      title: 'سودے کا خلاصہ، پلاٹ {plot}',
      buyerSize: '{buyer}، {size}',
      salePrice: 'فروخت کی قیمت',
      downPayment: 'ڈاؤن پیمنٹ',
      installmentPlan: 'قسطوں کا پلان',
      installmentPlanValue: '{count} x {amount}',
      paidVsRemaining: 'ادا شدہ اور باقی',
      percentPaid: '{pct}% ادا ہو چکا',
      paid: 'ادا شدہ',
      remaining: 'باقی',
      profit: 'اس سودے کا منافع',
    },
  },
  kpis: {
    items: { sales: 'کل سیلز', received: 'وصول شدہ', outstanding: 'بقایا', rate: 'وصولی کی شرح' },
    /** Word after the number in KPI values. Keep the leading space if the language uses one. */
    millionSuffix: ' ملین',
    deltaLabel: 'پچھلی سہ ماہی کے مقابلے میں',
    up: 'اضافہ',
    down: 'کمی',
    trendLabel: '{label} کا رجحان، {range}',
  },
  charts: {
    /** Y axis tick: 4 -> '4M'. */
    axisMillion: '{n}M',
    collections: {
      title: 'وصولیوں کا رجحان',
      subtitle: 'ہر ماہ وصول ہونے والی رقم',
      summary: 'ہر ماہ وصول ہونے والی رقم، {range}: {items}۔ کل {total}۔',
      item: '{month} {amount}',
      pointLabel: '{month}: {amount} وصول ہوئے',
    },
    receivedOutstanding: {
      title: 'وصول شدہ اور بقایا',
      subtitle: 'ہر ماہ، روپوں کے ملین میں',
      summary: 'ہر ماہ وصول شدہ اور بقایا رقم، روپوں کے ملین میں: {items}۔',
      item: '{month} وصول شدہ {received}، بقایا {outstanding}',
      pointLabel: '{month}: وصول شدہ {received}، بقایا {outstanding}',
      received: 'وصول شدہ',
      outstanding: 'بقایا',
      tipReceived: 'وصول شدہ {value}',
      tipOutstanding: 'بقایا {value}',
    },
    statusDonut: {
      title: 'ادائیگی کی حالت',
      subtitle: 'تمام قسطیں',
      summary: '{total} قسطیں: {items}۔',
      item: '{count} {status}',
      center: 'قسطیں',
    },
  },
  table: {
    title: 'تازہ ترین قسطیں',
    filterLabel: 'قسطوں کو حالت کے لحاظ سے چھانٹیں',
    all: 'سب',
    /** Summary line. <n> marks the bold numbers. {what} is 'installments' or the lowercase status. */
    summary: '<n>{count}</n> {what}، کل <n>{total}</n>',
    allInstallments: 'قسطیں',
    empty: 'اس منظر میں کچھ نہیں',
    caption: 'تازہ ترین قسطیں خریدار، واجب الادا تاریخ، رقم اور حالت کے ساتھ',
    plotAndBuyer: 'پلاٹ اور خریدار',
    dueDate: 'واجب الادا تاریخ',
    amount: 'رقم',
    statusHeading: 'حالت',
    due: 'واجب {date}',
  },
  plotMap: {
    title: 'پلاٹوں کی دستیابی',
    filterLabel: 'پلاٹوں کو حالت کے لحاظ سے چھانٹیں',
    block: 'بلاک {block}',
    plotLabel: 'پلاٹ {id}',
    plotAria: 'پلاٹ {id}، {size}، {price}، {status}',
    showing: '<n>{count}</n> {status} پلاٹ دکھائے جا رہے ہیں۔',
    total: 'اس منصوبے میں <n>{count}</n> پلاٹ ہیں۔ تفصیل کے لیے کسی پلاٹ پر ماؤس لے جائیں یا فوکس کریں۔',
  },
  timeline: {
    title: 'قسطوں کی ٹائم لائن',
    progress: '<n>{total}</n> میں سے <n>{paid}</n> قسطیں ادا ہو چکیں',
    downPayment: 'ڈاؤن پیمنٹ',
    installmentN: 'قسط {n}',
    states: { paid: 'ادا شدہ', due: 'اگلی واجب', overdue: 'واجب الادا', upcoming: 'آنے والی' },
  },
  receipt: {
    ariaLabel: 'رسید {id}',
    title: 'ادائیگی کی رسید',
    receivedFrom: 'وصول کنندہ از',
    plot: 'پلاٹ',
    plotValue: '{id}، {size}',
    forLabel: 'کس کی',
    forValue: '{total} میں سے قسط {n}',
    method: 'طریقہ',
    methodValue: 'بینک ٹرانسفر',
    slipReference: 'سلپ کا حوالہ',
    date: 'تاریخ',
    amountReceived: 'وصول شدہ رقم',
    stampAria: 'ادا شدہ',
    stamp: 'ادا شدہ',
    receivedBy: 'وصول کنندہ: {who}۔',
    accountsDesk: 'اکاؤنٹس ڈیسک',
  },
}
export default showcase
