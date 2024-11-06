// randomStandardNormal
// mean = 0 , std = 1 
tf.randomStandardNormal(shape=[1,3,224,224],dtype='float32',seed=49).print();
tf.randomNormal(shape=[2,2],mean=15,stdDev=30,dtype='float32',seed=49).print();

tf.randomUniform(shape=[2,2],minval=0,maxval=100,dtype='float32',seed=49).print();

tf.randomUniformInt(shape=[2,2],minval=0,maxval=100,seed=49).print();