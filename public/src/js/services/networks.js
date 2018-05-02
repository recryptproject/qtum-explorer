'use strict';

angular.module('insight.networks')
	.factory('Networks',
		function(Constants, RecryptCoreLib) {
			return {
				getCurrentNetwork: function () {
					return RecryptCoreLib.Networks.get(Constants.NETWORK);
				}
			}
		});