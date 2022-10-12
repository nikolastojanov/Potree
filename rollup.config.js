export default [
	{
		input: 'src/Potree.js',
		treeshake: false,
		output: {
			file: 'build/potree/potree.js',
			format: 'umd',
			name: 'Potree',
			sourcemap: true,
		}
	},
	{
		input: 'src/workers/BinaryDecoderWorker.js',
		output: {
			file: 'build/potree/workers/BinaryDecoderWorker.js',
			format: 'umd',
			name: 'Potree',
			sourcemap: true
		}
	},
	{
		input: 'src/modules/loader/2.0/DecoderWorker.js',
		output: {
			file: 'build/potree/workers/2.0/DecoderWorker.js',
			format: 'umd',
			name: 'Potree',
			sourcemap: true
		}
	},
	{
		input: 'src/modules/loader/2.0/DecoderWorker_brotli.js',
		output: {
			file: 'build/potree/workers/2.0/DecoderWorker_brotli.js',
			format: 'umd',
			name: 'Potree',
			sourcemap: true
		}
	},
	{
		input: 'libs/three.js/build/three.module.js',
		output: {
			file: 'build/three/loaders/three.js',
			format: 'umd',
			name: 'Three',
			sourcemap: true
		}
	},
	{
		input: 'libs/three.js/loaders/GLTFLoader.js',
		output: {
			file: 'build/three/loaders/GLTFLoader.js',
			format: 'umd',
			name: 'Three',
			sourcemap: true
		}
	}
]