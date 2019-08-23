var faker = faker || {};

if (typeof window === 'object') {
	faker = window.faker = window.hasOwnProperty('faker') ? window.faker : {};
}

faker.definitions = faker.definitions || {};

faker.locales = faker.locales || {};

faker.locale = faker.locale || "en";

faker.locales[faker.locale] = faker.locales[faker.locale] || {};

/* stub dependencies */

faker.name = faker.name || {};

faker.commerce = faker.commerce || {};

faker.internet = faker.internet || {};

/* include new methods */

faker = require('./src/address')(faker);
faker = require('./src/color')(faker);
faker = require('./src/company')(faker);
faker = require('./src/internet')(faker);
faker = require('./src/name')(faker);
faker = require('./src/payment')(faker);
faker = require('./src/random')(faker);

module.exports = function (f) {
	f = typeof f === 'object' ? f : {};

	for (var namespace in faker) {
		if (faker.hasOwnProperty(namespace)) {
			for (var method in faker[namespace]) {
				if (faker[namespace].hasOwnProperty(method)) {
					f[namespace] = f[namespace] || {};
					f[namespace][method] = faker[namespace][method];
				}
			}
		}
	}

	return f;
};