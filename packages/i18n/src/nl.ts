import { Language } from './types';

// prettier-ignore
const language: Language = {
  code:             'nl',
  schema:           (issue) => `Ongeldig type: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
  specific: {
    bic:            (issue) => `Ongeldige BIC: ${issue.received} ontvangen`,
    bytes:          (issue) => `Ongeldige bytes: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    creditCard:     (issue) => `Ongeldige creditcard: ${issue.received} ontvangen`,
    cuid2:          (issue) => `Ongeldige Cuid2: ${issue.received} ontvangen`,
    custom:         (issue) => `Ongeldige invoer: ${issue.received} ontvangen`,
    customAsync:    (issue) => `Ongeldige invoer: ${issue.received} ontvangen`,
    decimal:        (issue) => `Ongeldige decimaal: ${issue.received} ontvangen`,
    email:          (issue) => `Ongeldige e-mail: ${issue.received} ontvangen`,
    emoji:          (issue) => `Ongeldige emoji: ${issue.received} ontvangen`,
    endsWith:       (issue) => `Ongeldig einde: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    equal:          (issue) => `Ongeldige waarde: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    excludes:       (issue) => `Ongeldige inhoud: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    finite:         (issue) => `Ongeldige eindige: ${issue.received} ontvangen`,
    hash:           (issue) => `Ongeldige hash: ${issue.received} ontvangen`,
    hexColor:       (issue) => `Ongeldige hex kleur: ${issue.received} ontvangen`,
    hexadecimal:    (issue) => `Ongeldige hexadecimaal: ${issue.received} ontvangen`,
    imei:           (issue) => `Ongeldige IMEI: ${issue.received} ontvangen`,
    includes:       (issue) => `Ongeldige inhoud: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    integer:        (issue) => `Ongeldige geheel getal: ${issue.received} ontvangen`,
    ip:             (issue) => `Ongeldige IP: ${issue.received} ontvangen`,
    ipv4:           (issue) => `Ongeldig IPv4: ${issue.received} ontvangen`,
    ipv6:           (issue) => `Ongeldig IPv6: ${issue.received} ontvangen`,
    isoDate:        (issue) => `Ongeldige datum: ${issue.received} ontvangen`,
    isoDateTime:    (issue) => `Ongeldige datum-tijd: ${issue.received} ontvangen`,
    isoTime:        (issue) => `Ongeldige tijd: ${issue.received} ontvangen`,
    isoTimeSecond:  (issue) => `Ongeldige tijd in seconden: ${issue.received} ontvangen`,
    isoTimestamp:   (issue) => `Ongeldige tijdstempel: ${issue.received} ontvangen`,
    isoWeek:        (issue) => `Ongeldige week: ${issue.received} ontvangen`,
    length:         (issue) => `Ongeldige lengte: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    mac:            (issue) => `Ongeldige MAC: ${issue.received} ontvangen`,
    mac48:          (issue) => `Ongeldige 48-bit MAC: ${issue.received} ontvangen`,
    mac64:          (issue) => `Ongeldige 64-bit MAC: ${issue.received} ontvangen`,
    maxBytes:       (issue) => `Ongeldige bytes: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    maxLength:      (issue) => `Ongeldige lengte: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    maxSize:        (issue) => `Ongeldige grootte: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    maxValue:       (issue) => `Ongeldige waarde: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    mimeType:       (issue) => `Ongeldig MIME-type: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    minBytes:       (issue) => `Ongeldige bytes: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    minLength:      (issue) => `Ongeldige lengte: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    minSize:        (issue) => `Ongeldige grootte: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    minValue:       (issue) => `Ongeldige waarde: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    multipleOf:     (issue) => `Ongeldige meervoudige: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    notBytes:       (issue) => `Ongeldige bytes: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    notLength:      (issue) => `Ongeldige lengte: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    notSize:        (issue) => `Ongeldige grootte: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    notValue:       (issue) => `Ongeldige waarde: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    octal:          (issue) => `Ongeldige octaal: ${issue.received} ontvangen`,
    regex:          (issue) => `Ongeldige formaat: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    safeInteger:    (issue) => `Ongeldig veilig geheel getal: ${issue.received} ontvangen`,
    size:           (issue) => `Ongeldige grootte: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    startsWith:     (issue) => `Ongeldig begin: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
    ulid:           (issue) => `Ongeldige ULID: ${issue.received} ontvangen`,
    url:            (issue) => `Ongeldige URL: ${issue.received} ontvangen`,
    uuid:           (issue) => `Ongeldige UUID: ${issue.received} ontvangen`,
    value:          (issue) => `Ongeldige waarde: ${issue.expected} verwacht, maar ${issue.received} ontvangen`,
  },
};

export default language;
