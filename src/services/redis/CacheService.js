class CacheService {
  constructor() {
    this._client = redis.createClient({
      socket: {
        host:process.env.REDIS_SERVER,
      },
    });

    this.client.on('error', (error) => {
      console.error(error);
    });

    this._client.connect();
  }
}
