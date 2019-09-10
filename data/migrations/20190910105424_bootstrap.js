//changes we want to make
exports.up = function(knex) {
	//create a table called fruits
	return knex.schema.createTable("fruits", tbl => {
	  //id, pk, auto-increment, integer
	  tbl.increments();
      
	  //name: string up to 128, unique, required (not null)
	  tbl
	    .string("name", 128)
	    .unique()
	    .notNullable();
	  // tbl.text(); can use this too
      
	  //avgWeightOz, decimals
	  tbl.decimal("avgWeightOz");
      
	  //delicious: boolean
	  tbl.boolean("delicious");
	});
      };
      
      // to revert the changes from the 'up' function
      exports.down = function(knex) {
	      return knex.schema.dropTableIfExists('fruits');
      };
