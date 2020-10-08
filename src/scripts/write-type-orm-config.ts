/* eslint-disable no-magic-numbers */
import fs = require('fs');
import { configService } from 'src/config/config.service';

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(configService.getTypeOrmConfig(), null, 2),
);
