define(['./MemoryModel'], function(Memory) {
	return Backbone.Collection.extend({
		model: Memory,
		url: 'https://api.mongolab.com/api/1/databases/emilytest/collections/birthdaywishes?apiKey=4f2cd22be4b024f14205b60e'
	});
});