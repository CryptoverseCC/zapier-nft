require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('triggers', () => {
  describe('new purr trigger', () => {
    it('should load purrs', done => {
      const bundle = {
        inputData: {
          api_url: 'https://api-dev.userfeeds.io',
          network: 'ethereum',
          contract: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
          kitty_id: 587035,
        },
      };

      appTester(App.triggers.purr.operation.perform, bundle)
        .then(results => {
          results.length.should.above(0);

          const firstPurr = results[results.length - 1];
          firstPurr.id.should.eql(
            'claim:0xd87fbe04e51c55bbd90b3dcfbd48046311427038dfbb5597c533f85c5a85e7bf:0',
          );
          firstPurr.content.should.eql('I \u2764 catnip');

          done();
        })
        .catch(done);
    });
  });

  describe('new like trigger', () => {
    it('should load likes', done => {
      const bundle = {
        inputData: {
          api_url: 'https://api-dev.userfeeds.io',
          network: 'ethereum',
          contract: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
          kitty_id: 593163,
        },
      };

      appTester(App.triggers.like.operation.perform, bundle)
        .then(results => {
          results.length.should.above(0);

          const firstLike = results[results.length - 1];
          firstLike.id.should.eql(
            'claim:0x9aca0b21d307aef5db67445201aff00644f0e516c839edb2d4b12379eb791c49:0',
          );
          firstLike.content.should.eql('you will be! soon soon purr ');

          done();
        })
        .catch(done);
    });
  });

  describe('new response trigger', () => {
    it('should load responses', done => {
      const bundle = {
        inputData: {
          api_url: 'https://api-dev.userfeeds.io',
          network: 'ethereum',
          contract: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
          kitty_id: 593163,
        },
      };

      appTester(App.triggers.reply.operation.perform, bundle)
        .then(results => {
          results.length.should.above(0);

          const firstResponse = results[results.length - 1];
          firstResponse.id.should.eql(
            'claim:0x6be4ee9900813d40b4f788ee9fb0e852364317a51ab68c56f6bd11f2319034bc:0',
          );
          firstResponse.content.should.eql(
            'Yeah, it works https://twitter.com/Kitty_593163/status/980770904220291072',
          );

          done();
        })
        .catch(done);
    });
  });
});
