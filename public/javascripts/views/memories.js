define(['models/MemoryCollection', '../lib/tmpl!./memory'], function(Memories, template) {
    return Backbone.View.extend({
        el: 'body',
        
        events: {
            'click .add' : 'toggleNewMemoryWindow',
            'click #newMemoryForm .close' : 'toggleNewMemoryWindow',
            'click #addNewMemory' : 'saveNewMemory',
            'click .memory h3' : 'showMemory',
            'click .memoryText.open' : 'hideMemory',
            'click .memory .close' : 'closeMemory'
        },

        initialize: function() {
            this.collection = new Memories();
            this.collection.on('reset', this.renderMemoryList, this);
            this.collection.on('add', this.renderMemory, this);

            this.collection.fetch();
        },

        renderMemoryList: function(collection) {
            collection.each(this.renderMemory, this);
        },

        renderMemory: function(memory) {
            memory.set({color : Math.floor(Math.random()*10) });
            var memoryHTML = template(memory.toJSON());
            this.$('#memories').append(memoryHTML);
        },

        toggleNewMemoryWindow: function() {
            //Close any existing memories
            if (this.$('.memoryText.open').length > 0) {
                this.$('.memoryText.open').children('.close').click();
            }

            var newMemoryForm = this.$('#newMemoryForm');
            if (newMemoryForm.hasClass('open')) {
                newMemoryForm
                    .slideUp('600')
                    .removeClass('open');

                this.$('newName').focus();
            }
            else {
                newMemoryForm
                    .slideDown('600')
                    .addClass('open');
            }
        },

        showMemory: function(event) {
            //Close the new memory window
            if (this.$('#newMemoryForm.open').length > 0) {
                this.$('#newMemoryForm.open')
                    .hide()
                    .removeClass('open');
            }

            //Close any existing memories
            if (this.$('.memoryText.open').length > 0) {
                this.$('.memoryText.open').children('.close').click();
            }

            var memoryText = $(event.target).siblings('.memoryText');

            memoryText
                .fadeIn('600')
                .addClass('open');

        },

        hideMemory: function(event) {
            var memoryText = $(event.target).parents('.memoryText');

            memoryText
                .fadeOut('600')
                .removeClass('open');
        },

        closeMemory: function(event) {
            var memoryText = $(event.target).parent();

            memoryText
                .fadeOut('600')
                .removeClass('open');
        },

        saveNewMemory: function() {
            if (this.$('#newMemory').val() === '') {
                return false;
            }

            //Create and save the model
            this.collection.create({
                name: this.$('#newName').val(),
                text: this.$('#newMemory').val(),
                date: Date.now()
            });

            //Clear the form
            this.$('#newName').val('');
            this.$('#newMemory').val('');

            //Close the form
            this.toggleNewMemoryWindow();
        }
    });
});