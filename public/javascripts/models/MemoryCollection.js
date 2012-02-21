define(['./MemoryModel'], function(Memory) {
	return Backbone.Collection.extend({
		model: Memory,
		url: 'https://api.mongolab.com/api/1/databases/emilybirthday/collections/memories?apiKey=4f431753e4b0c5f6ebb3155b'
	});
});